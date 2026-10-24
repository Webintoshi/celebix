import { createLifecycle } from './lifecycle';
const instances = new WeakMap();
/** Mount a trusted, imperative DOM island; React owns only its outer host. */
export function mountCommerce(root) {
    instances.get(root)?.();
    const originalMarkup = root.innerHTML;
    const lifecycle = createLifecycle(root);
    const document = lifecycle.document;
    const window = lifecycle.window;
    const { setTimeout, clearTimeout, requestAnimationFrame, cancelAnimationFrame } = lifecycle;
    let workspaceApi, disposed = false;
    const dispose = () => {
        if (disposed)
            return;
        disposed = true;
        lifecycle.dispose();
        root.innerHTML = originalMarkup;
        if (instances.get(root) === dispose)
            instances.delete(root);
    };
    try {
        /* V6 local workspace. Story playback is silent; direct UI actions emit host events. */
        (function () {
            "use strict";
            var workspace = document.querySelector('.workspace.workspace-v6[data-testid="workspace"]');
            if (!workspace || workspace.dataset.initializedV6 === "true")
                return;
            var form = workspace.querySelector("#ws-product-editor");
            var fields = {
                name: workspace.querySelector("#ws-product-name"),
                category: workspace.querySelector("#ws-product-category"),
                stock: workspace.querySelector("#ws-product-stock"),
                price: workspace.querySelector("#ws-product-price"),
                stockCount: workspace.querySelector("#ws-product-stock-count")
            };
            if (!form || Object.keys(fields).some(function (key) { return !fields[key]; }))
                return;
            workspace.dataset.initializedV6 = "true";
            var products = {
                shirt: { name: "Basic Tişört", category: "Giyim", stock: "Stokta", price: 790, stockCount: 24 },
                lamp: { name: "Masa Lambası", category: "Ev & Yaşam", stock: "Stokta", price: 790, stockCount: 24 },
                notebook: { name: "Defter", category: "Kırtasiye", stock: "Stokta", price: 790, stockCount: 24 }
            };
            var drafts = {};
            Object.keys(products).forEach(function (id) {
                drafts[id] = {};
                Object.keys(fields).forEach(function (key) { drafts[id][key] = String(products[id][key]); });
            });
            var phases = ["Alındı", "Hazırlanıyor", "Kargoya hazır", "Gönderildi"];
            var storyPhases = { edit: -1, published: -1, ordered: 0, preparing: 1, shipped: 3 };
            var state = { phase: "edit", published: false, hasOrder: false, orderPhase: -1, productId: "shirt", order: null };
            var selectedId = "shirt";
            var rows = Array.from(workspace.querySelectorAll("[data-product-id]"));
            var search = workspace.querySelector("#ws-product-search");
            var saveStatus = workspace.querySelector("#ws-save-status");
            var storeImage = workspace.querySelector(".ws-store-product-image img");
            var orderImage = workspace.querySelector(".ws-order-thumb img");
            var customerImage = workspace.querySelector(".ws-customer-thumb img");
            var noteTimer;
            function hasProduct(id) {
                return typeof id === "string" && Object.prototype.hasOwnProperty.call(products, id);
            }
            function validNumber(value) {
                if (typeof value !== "number" && !(typeof value === "string" && value.trim() !== ""))
                    return NaN;
                return Number(value);
            }
            function validateProduct(input) {
                if (!input || typeof input !== "object" || Array.isArray(input))
                    return { ok: false, error: "Ürün bilgileri geçersiz.", field: "name" };
                var name = typeof input.name === "string" ? input.name.trim() : "";
                if (!name || name.length > 45)
                    return { ok: false, error: "Ürün adı 1–45 karakter olmalı.", field: "name" };
                var price = validNumber(input.price);
                if (!Number.isFinite(price) || price < 0.01 || price > Number.MAX_SAFE_INTEGER / 100)
                    return { ok: false, error: "Fiyat en az 0,01 TL olan geçerli bir sayı olmalı.", field: "price" };
                var stockCount = validNumber(input.stockCount);
                if (!Number.isSafeInteger(stockCount) || stockCount < 0)
                    return { ok: false, error: "Stok adedi sıfır veya pozitif bir tam sayı olmalı.", field: "stockCount" };
                var category = typeof input.category === "string" ? input.category.trim() : "";
                if (!category || category.length > 60)
                    return { ok: false, error: "Geçerli bir kategori girin.", field: "category" };
                var stock = input.stock;
                if (!["Stokta", "Düşük stok", "Tükendi"].includes(stock))
                    return { ok: false, error: "Geçerli bir stok durumu seçin.", field: "stock" };
                return { ok: true, product: { name: name, category: category, stock: stockCount === 0 ? "Tükendi" : stock, price: Math.round(price * 100) / 100, stockCount: stockCount } };
            }
            function applyProduct(id, product) {
                products[id] = Object.assign({}, product);
                drafts[id] = {};
                Object.keys(fields).forEach(function (key) { drafts[id][key] = String(product[key]); });
                renderRow(id);
            }
            function loadSelectedFields() {
                var category = drafts[selectedId].category;
                if (!Array.from(fields.category.options).some(function (option) { return option.value === category; })) {
                    var option = document.createElement("option");
                    option.value = category;
                    option.textContent = category;
                    fields.category.appendChild(option);
                }
                Object.keys(fields).forEach(function (key) {
                    fields[key].value = drafts[selectedId][key];
                    fields[key].setCustomValidity("");
                });
                rows.forEach(function (row) {
                    var selected = row.dataset.productId === selectedId;
                    row.classList.toggle("is-selected", selected);
                    row.setAttribute("aria-pressed", String(selected));
                });
            }
            function resetNarrative() {
                captureDraft();
                state.phase = "edit";
                state.published = false;
                state.hasOrder = false;
                state.orderPhase = -1;
                state.order = null;
                renderState();
                return getState();
            }
            function configureProduct(id, input) {
                if (!hasProduct(id))
                    return { ok: false, error: "Ürün bulunamadı." };
                if (!input || typeof input !== "object" || Array.isArray(input))
                    return { ok: false, error: "Ürün bilgileri geçersiz." };
                var candidate = Object.assign({}, products[id]);
                ["name", "price", "stockCount", "category", "stock"].forEach(function (key) {
                    if (Object.prototype.hasOwnProperty.call(input, key))
                        candidate[key] = input[key];
                });
                if (Object.prototype.hasOwnProperty.call(input, "stockCount") && validNumber(input.stockCount) > 0 && candidate.stock === "Tükendi" && !Object.prototype.hasOwnProperty.call(input, "stock"))
                    candidate.stock = "Stokta";
                var result = validateProduct(candidate);
                if (!result.ok)
                    return { ok: false, error: result.error, field: result.field };
                captureDraft();
                applyProduct(id, result.product);
                selectedId = id;
                if (state.productId !== id) {
                    state.productId = id;
                    state.phase = "edit";
                    state.published = false;
                    state.hasOrder = false;
                    state.orderPhase = -1;
                    state.order = null;
                }
                loadSelectedFields();
                renderState();
                filterProducts(search.value);
                setSaveMessage("Değişiklikler güncel");
                return { ok: true, product: getProduct(id) };
            }
            function exportSession() {
                captureDraft();
                var snapshot = { version: 3, products: {}, drafts: {}, selectedId: selectedId, search: search.value, state: Object.assign({}, state, { order: copy(state.order) }) };
                Object.keys(products).forEach(function (id) {
                    snapshot.products[id] = copy(products[id]);
                    snapshot.drafts[id] = copy(drafts[id]);
                });
                return snapshot;
            }
            function importSession(snapshot) {
                if (!snapshot || snapshot.version !== 3 || !snapshot.products || !snapshot.state)
                    return { ok: false, error: "Oturum verisi geçersiz." };
                var nextProducts = {}, nextDrafts = {};
                var ids = Object.keys(products);
                for (var i = 0; i < ids.length; i++) {
                    var id = ids[i], result = validateProduct(snapshot.products[id]);
                    if (!result.ok)
                        return { ok: false, error: "Oturumdaki ürün bilgileri geçersiz." };
                    nextProducts[id] = result.product;
                    nextDrafts[id] = {};
                    var savedDraft = snapshot.drafts && snapshot.drafts[id];
                    var keys = Object.keys(fields);
                    for (var n = 0; n < keys.length; n++) {
                        var key = keys[n], value = savedDraft ? savedDraft[key] : String(result.product[key]);
                        if (typeof value !== "string" || value.length > 4096)
                            return { ok: false, error: "Oturumdaki form bilgileri geçersiz." };
                        nextDrafts[id][key] = value;
                    }
                }
                var next = snapshot.state;
                if (!ids.includes(next.productId) || !ids.includes(snapshot.selectedId) || !Object.prototype.hasOwnProperty.call(storyPhases, next.phase))
                    return { ok: false, error: "Oturumun ürün veya adım bilgisi geçersiz." };
                if (typeof next.published !== "boolean" || typeof next.hasOrder !== "boolean" || !Number.isInteger(next.orderPhase))
                    return { ok: false, error: "Oturum durumu geçersiz." };
                var phaseIsValid = next.phase === "edit" ? !next.published && !next.hasOrder && next.orderPhase === -1 :
                    next.phase === "published" ? next.published && !next.hasOrder && next.orderPhase === -1 :
                        next.phase === "ordered" ? next.published && next.hasOrder && next.orderPhase === 0 :
                            next.phase === "preparing" ? next.published && next.hasOrder && (next.orderPhase === 1 || next.orderPhase === 2) :
                                next.published && next.hasOrder && next.orderPhase === 3;
                if (!phaseIsValid)
                    return { ok: false, error: "Oturum adımı durumla eşleşmiyor." };
                var order = null;
                if (next.order) {
                    var candidateOrder = next.order;
                    var unitPrice = validNumber(candidateOrder.unitPrice);
                    var quantity = validNumber(candidateOrder.quantity);
                    var orderName = typeof candidateOrder.name === "string" ? candidateOrder.name.trim() : "";
                    var total = Math.round(unitPrice * quantity * 100) / 100;
                    if (!ids.includes(candidateOrder.productId) || candidateOrder.productId !== next.productId || !orderName || orderName.length > 45 || !Number.isFinite(unitPrice) || unitPrice < 0.01 || !Number.isSafeInteger(quantity) || quantity < 1 || !Number.isFinite(total) || total > Number.MAX_SAFE_INTEGER / 100 || candidateOrder.total !== total)
                        return { ok: false, error: "Oturumdaki sipariş geçersiz." };
                    order = { id: "1042", productId: candidateOrder.productId, name: orderName, category: typeof candidateOrder.category === "string" ? candidateOrder.category : nextProducts[candidateOrder.productId].category, unitPrice: unitPrice, price: unitPrice, quantity: quantity, total: total, size: candidateOrder.productId === "shirt" ? normalizeSize(candidateOrder.size) : null };
                }
                if (next.hasOrder && !order)
                    return { ok: false, error: "Sipariş verisi eksik." };
                if (snapshot.search !== undefined && (typeof snapshot.search !== "string" || snapshot.search.length > 4096))
                    return { ok: false, error: "Arama bilgisi geçersiz." };
                products = nextProducts;
                drafts = nextDrafts;
                selectedId = snapshot.selectedId;
                state = { phase: next.phase, published: next.published, hasOrder: next.hasOrder, orderPhase: next.orderPhase, productId: next.productId, order: order };
                search.value = snapshot.search || "";
                loadSelectedFields();
                Object.keys(products).forEach(renderRow);
                renderState();
                filterProducts(search.value);
                setSaveMessage(isDirty(selectedId) ? "Kaydedilmemiş değişiklikler" : "Değişiklikler güncel");
                return { ok: true, state: getState() };
            }
            function copy(value) { return value ? Object.assign({}, value) : null; }
            function text(selector, value) {
                var node = workspace.querySelector(selector);
                if (node && node.textContent !== String(value))
                    node.textContent = String(value);
            }
            function hidden(selector, value) {
                var node = workspace.querySelector(selector);
                if (node && node.hidden !== value)
                    node.hidden = value;
            }
            function emit(name, detail) {
                workspace.dispatchEvent(new CustomEvent(name, { bubbles: true, detail: detail }));
            }
            function formatPrice(value) {
                return Number(value).toLocaleString("tr-TR", { maximumFractionDigits: 2 }) + " TL";
            }
            function getProduct(id) {
                if (!hasProduct(id))
                    return null;
                return Object.assign({}, products[id], { published: state.published && state.productId === id });
            }
            function getState() {
                return {
                    phase: state.phase, published: state.published, hasOrder: state.hasOrder,
                    orderPhase: state.orderPhase, productId: state.productId, selectedId: selectedId,
                    order: state.hasOrder ? copy(state.order) : null
                };
            }
            function setSaveMessage(message) {
                if (saveStatus.dataset.message === message)
                    return;
                saveStatus.dataset.message = message;
                saveStatus.innerHTML = '<svg class="ws-icon" aria-hidden="true"><use href="#ws-check"/></svg>';
                saveStatus.appendChild(document.createTextNode(message));
            }
            function captureDraft() {
                Object.keys(fields).forEach(function (key) { drafts[selectedId][key] = fields[key].value; });
            }
            function isDirty(id) {
                return Object.keys(fields).some(function (key) { return drafts[id][key] !== String(products[id][key]); });
            }
            function productImage(id, target, name) {
                if (!target)
                    return;
                var source = workspace.querySelector('[data-product-id="' + id + '"] img');
                if (source && source.getAttribute("src") && target.getAttribute("src") !== source.getAttribute("src")) {
                    target.setAttribute("src", source.getAttribute("src"));
                }
                target.dataset.product = id;
                target.alt = name;
            }
            function renderRow(id) {
                var product = products[id];
                var row = workspace.querySelector('[data-product-id="' + id + '"]');
                row.querySelector("[data-product-name]").textContent = product.name;
                row.querySelector("[data-product-category]").textContent = product.category + " · " + product.stockCount + " adet";
                row.querySelector("[data-product-status]").textContent = product.stock;
                row.querySelector("img").alt = product.name;
            }
            function renderOrderSteps() {
                workspace.querySelectorAll("[data-order-step]").forEach(function (button) {
                    var index = Number(button.dataset.orderStep);
                    button.parentElement.classList.toggle("is-complete", state.hasOrder && index < state.orderPhase);
                    button.parentElement.classList.toggle("is-current", state.hasOrder && index === state.orderPhase);
                    if (state.hasOrder && index === state.orderPhase)
                        button.setAttribute("aria-current", "step");
                    else
                        button.removeAttribute("aria-current");
                    var current = button.querySelector(".ws-step-current");
                    if (!current) {
                        current = document.createElement("span");
                        current.className = "ws-step-current";
                        current.textContent = "Şimdi";
                        button.appendChild(current);
                    }
                });
                text("#ws-order-status", state.hasOrder ? phases[state.orderPhase] : "");
            }
            function canOrderProduct(id) {
                var product = hasProduct(id) ? products[id] : null;
                return Boolean(product && product.stockCount > 0 && product.stock !== "Tükendi");
            }
            function normalizeSize(value) {
                var size = typeof value === "string" ? value.trim().toUpperCase() : "M";
                return ["S", "M", "L"].includes(size) ? size : "M";
            }
            function makeOrder(input) {
                if (input !== undefined && input !== null && (typeof input !== "object" || Array.isArray(input)))
                    return null;
                input = input || {};
                var productId = hasProduct(input.productId) ? input.productId : state.productId;
                var product = products[productId];
                var quantity = input.quantity === undefined ? 1 : validNumber(input.quantity);
                if (!canOrderProduct(productId) || !Number.isSafeInteger(quantity) || quantity < 1 || quantity > product.stockCount)
                    return null;
                var total = Math.round(product.price * quantity * 100) / 100;
                if (!Number.isFinite(total) || total > Number.MAX_SAFE_INTEGER / 100)
                    return null;
                return { id: "1042", productId: productId, size: productId === "shirt" ? normalizeSize(input.size) : null, name: product.name, category: product.category, unitPrice: product.price, price: product.price, quantity: quantity, total: total };
            }
            function renderState() {
                workspace.dataset.storyPhase = state.phase;
                workspace.dataset.published = String(state.published);
                workspace.dataset.hasOrder = String(state.hasOrder);
                text("#ws-publication-state", state.published && state.productId === selectedId ? "Yayımlandı" : "Yayına hazır");
                hidden("#ws-store-empty", state.published);
                hidden("#ws-store-content", !state.published);
                hidden("#ws-order-empty", state.hasOrder);
                hidden("#ws-order-detail", !state.hasOrder);
                hidden("#ws-customer-empty", state.hasOrder);
                hidden("#ws-customer-detail", !state.hasOrder);
                var storeProduct = products[state.productId];
                text("#ws-store-product-name", storeProduct.name);
                text("#ws-store-price", formatPrice(storeProduct.price));
                text(".ws-store-product-meta > span", state.productId === "shirt" ? "Siyah · Pamuk" : storeProduct.category);
                productImage(state.productId, storeImage, storeProduct.name);
                var orderDot = workspace.querySelector('.ws-nav-item[data-nav="orders"] .ws-nav-dot');
                if (orderDot)
                    orderDot.hidden = !state.hasOrder;
                if (state.hasOrder && state.order) {
                    text(".ws-order-product [data-shirt-name]", state.order.name);
                    text(".ws-order-product > div > span:not(.ws-order-quantity)", state.order.productId === "shirt" ? "Siyah · " + state.order.size + " beden" : state.order.category);
                    text("#ws-order-quantity", state.order.quantity + " adet");
                    text("#ws-order-price", formatPrice(state.order.total));
                    productImage(state.order.productId, orderImage, state.order.name);
                    text("#ws-customer-order-id", "Sipariş #" + state.order.id);
                    text("#ws-customer-product-name", state.order.name);
                    text("#ws-customer-quantity", state.order.quantity + " adet");
                    text("#ws-customer-status", phases[state.orderPhase]);
                    text("#ws-customer-total", formatPrice(state.order.total));
                    productImage(state.order.productId, customerImage, state.order.name);
                }
                renderOrderSteps();
                var storeNote = !state.published ? "Yayımlayın, mağazanızda görünsün." :
                    state.hasOrder ? "Örnek siparişiniz panelde." : "Ürününüz mağazanızda yayımlandı.";
                text("#ws-store-note", storeNote);
                var notes = ["Sipariş alındı. Hazırlığa geçebilirsiniz.", "Sipariş hazırlanıyor.", "Paketiniz kargoya hazır.", "Sipariş gönderildi."];
                text("#ws-order-note", state.hasOrder ? notes[state.orderPhase] :
                    state.published ? "Örnek siparişi mağazanızdan oluşturun." : "Siparişleriniz bu alanda görünür.");
                var storeButton = workspace.querySelector("#ws-store-add");
                var available = canOrderProduct(state.productId);
                var buttonLabel = state.hasOrder ? "Sipariş #1042 oluşturuldu" : !available ? "Stokta yok" : "Örnek sipariş oluştur";
                if (storeButton.dataset.label !== buttonLabel) {
                    storeButton.dataset.label = buttonLabel;
                    storeButton.innerHTML = buttonLabel + '<svg class="ws-icon" aria-hidden="true"><use href="' + (state.hasOrder ? "#ws-check" : "#ws-bag") + '"/></svg>';
                }
                var disabled = !state.published || state.hasOrder || !available;
                storeButton.disabled = disabled;
                storeButton.setAttribute("aria-disabled", String(disabled));
            }
            function filterProducts(query) {
                var normalized = String(query || "").trim().toLocaleLowerCase("tr");
                var visible = 0;
                rows.forEach(function (row) {
                    var product = products[row.dataset.productId];
                    var matches = (product.name + " " + product.category).toLocaleLowerCase("tr").includes(normalized);
                    row.hidden = !matches;
                    if (matches)
                        visible++;
                });
                text("#ws-product-count", visible);
                hidden("#ws-search-empty", visible !== 0);
            }
            function selectProduct(id) {
                if (!hasProduct(id))
                    return false;
                captureDraft();
                selectedId = id;
                loadSelectedFields();
                setSaveMessage(isDirty(id) ? "Kaydedilmemiş değişiklikler" : "Değişiklikler güncel");
                renderState();
                emit("celebix-commerce:product", { id: id });
                return true;
            }
            function commitProduct() {
                captureDraft();
                Object.keys(fields).forEach(function (key) { fields[key].setCustomValidity(""); });
                var result = validateProduct(drafts[selectedId]);
                if (!result.ok) {
                    fields[result.field].setCustomValidity(result.error);
                    form.reportValidity();
                    return false;
                }
                if (!form.reportValidity())
                    return false;
                applyProduct(selectedId, result.product);
                loadSelectedFields();
                renderState();
                filterProducts(search.value);
                setSaveMessage("Değişiklikler kaydedildi");
                return true;
            }
            function saveProduct() {
                if (!commitProduct())
                    return false;
                emit("celebix-commerce:saved", { id: selectedId, product: getProduct(selectedId) });
                return true;
            }
            function publishProduct() {
                if (!commitProduct())
                    return false;
                if (state.productId !== selectedId) {
                    state.order = null;
                    state.hasOrder = false;
                    state.orderPhase = -1;
                }
                state.productId = selectedId;
                state.published = true;
                if (!state.hasOrder)
                    state.phase = "published";
                renderState();
                setSaveMessage("Ürün mağazada yayımlandı");
                var detail = { id: selectedId, product: getProduct(selectedId) };
                emit("celebix-commerce:saved", detail);
                emit("celebix-commerce:published", detail);
                return true;
            }
            function storyPhase(phase) {
                if (!Object.prototype.hasOwnProperty.call(storyPhases, phase))
                    return false;
                var orderPhase = storyPhases[phase];
                var order = state.order;
                if (orderPhase >= 0 && !order) {
                    order = makeOrder();
                    if (!order)
                        return false;
                }
                captureDraft();
                state.phase = phase;
                state.published = phase !== "edit";
                state.orderPhase = orderPhase;
                state.hasOrder = orderPhase >= 0;
                state.order = order;
                renderState();
                return getState();
            }
            function setOrderPhase(index) {
                index = Number(index);
                if (!Number.isInteger(index) || index < 0 || index > 3)
                    return false;
                var order = state.order || makeOrder();
                if (!order)
                    return false;
                state.published = true;
                state.hasOrder = true;
                state.orderPhase = index;
                state.phase = index === 3 ? "shipped" : index === 0 ? "ordered" : "preparing";
                state.order = order;
                renderState();
                emit("celebix-commerce:order", { phase: index, label: phases[index], order: copy(state.order) });
                return true;
            }
            function createStoreOrder(input) {
                if (!state.published)
                    return false;
                if (input && Object.prototype.hasOwnProperty.call(input, "productId") && input.productId !== state.productId)
                    return false;
                var order = makeOrder(input);
                if (!order)
                    return false;
                if (state.hasOrder)
                    return copy(state.order);
                state.order = order;
                state.hasOrder = true;
                state.orderPhase = 0;
                state.phase = "ordered";
                renderState();
                var detail = { id: order.id, order: copy(order), product: getProduct(order.productId), phase: 0, label: phases[0] };
                emit("celebix-commerce:order-created", detail);
                return copy(order);
            }
            function focusTarget(target, sourceButton) {
                if (!["products", "orders", "customer", "store"].includes(target))
                    return false;
                workspace.querySelectorAll(".ws-nav-item").forEach(function (button) {
                    var active = sourceButton && sourceButton.classList.contains("ws-nav-item") ? button === sourceButton : button.dataset.nav === target;
                    button.classList.toggle("is-active", Boolean(active));
                    if (active)
                        button.setAttribute("aria-current", "page");
                    else
                        button.removeAttribute("aria-current");
                });
                emit("celebix-commerce:focus", { target: target });
                return true;
            }
            lifecycle.listen(workspace, "click", function (event) {
                var target = event.target;
                if (!target || !target.closest)
                    return;
                var productButton = target.closest("[data-product-id]");
                if (productButton)
                    selectProduct(productButton.dataset.productId);
                var stepButton = target.closest("[data-order-step]");
                if (stepButton)
                    setOrderPhase(stepButton.dataset.orderStep);
                var focusButton = target.closest("[data-focus]");
                if (focusButton)
                    focusTarget(focusButton.dataset.focus, focusButton);
                var noteButton = target.closest("[data-ws-note]");
                if (noteButton) {
                    var note = workspace.querySelector("#ws-header-note");
                    note.textContent = noteButton.dataset.wsNote;
                    note.hidden = false;
                    clearTimeout(noteTimer);
                    noteTimer = setTimeout(function () { note.hidden = true; }, 3500);
                }
            });
            lifecycle.listen(form, "submit", function (event) { event.preventDefault(); saveProduct(); });
            Object.keys(fields).forEach(function (key) {
                lifecycle.listen(fields[key], "input", function () {
                    fields[key].setCustomValidity("");
                    captureDraft();
                    setSaveMessage(isDirty(selectedId) ? "Kaydedilmemiş değişiklikler" : "Değişiklikler güncel");
                });
            });
            lifecycle.listen(search, "input", function () { filterProducts(search.value); });
            lifecycle.listen(workspace.querySelector("#ws-publish-product"), "click", publishProduct);
            lifecycle.listen(workspace.querySelector("#ws-store-add"), "click", function () { createStoreOrder(); });
            workspaceApi = {
                selectProduct: selectProduct,
                saveProduct: saveProduct,
                publishProduct: publishProduct,
                setOrderPhase: setOrderPhase,
                storyPhase: storyPhase,
                createStoreOrder: createStoreOrder,
                updateFromStoreOrder: createStoreOrder,
                setSearch: function (query) { search.value = String(query || ""); filterProducts(search.value); },
                focus: function (target) { return focusTarget(target); },
                getProduct: getProduct,
                getState: getState,
                configureProduct: configureProduct,
                resetNarrative: resetNarrative,
                exportSession: exportSession,
                importSession: importSession
            };
            Object.keys(products).forEach(renderRow);
            captureDraft();
            renderState();
        })();
        (function () {
            'use strict';
            var $ = function (s) { return document.querySelector(s); };
            var film = $('#film'), stage = $('#stage'), viewport = $('#viewport'), camera = $('#camera');
            var workspace = camera.querySelector('.workspace'), storeScene = $('#storeScene'), panelDialog = $('#panelDialog'), storeDialog = $('#storeDialog'), actionDialog = $('#actionDialog');
            var api = workspaceApi, copies = Array.from(document.querySelectorAll('[data-copy]'));
            var positions = [0, .17, .335, .50, .665, .835, 1], bounds = [.085, .2525, .4175, .5825, .75, .9175];
            var names = ['İlk adım', 'İlk ürününüz', 'Kendi mağazanız', 'İlk siparişiniz', 'Gönderim', 'İlk müşteriniz', 'Sıra sizde'];
            var hints = ['Celebix E-Ticaret', 'Fiyat ve stok bilgileri tek ekranda', 'Ürünleriniz kendi mağazanızda', 'Ürün, tutar ve müşteri bilgileri', 'Hazırlıktan gönderime durum takibi', 'Müşteri ve sipariş bilgileri bir arada', 'Kendi mağazanızı oluşturmaya başlayın'];
            var progress = 0, target = 0, raf = 0, lastTime = 0, playing = false, playProgress = 0, activeScene = -1, activePhase = '', keys = [], returnFocus = null, pendingScene = null, toastTimer;
            var productImages = {}, manualScene = null, manualOrderLabel = '', handoffClosures = new WeakSet();
            var reduce = matchMedia('(prefers-reduced-motion: reduce)');
            var composerDialog = $('#composerDialog'), exploreDialog = $('#exploreDialog'), motionChoice = false, composeId = 'shirt', composeDrafts = {}, sessionKey = 'celebix-commerce-demo-v1';
            var hasStarted = false, beginning = false, openingTimer = 0;
            function reduced() { return reduce.matches || motionChoice; }
            function clamp(n, a, b) { return Math.min(b, Math.max(a, n)); }
            function smooth(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); }
            function mix(a, b, t) { return a + (b - a) * t; }
            function range() { return Math.max(1, film.offsetHeight - innerHeight); }
            function filmStart() { return film.getBoundingClientRect().top + scrollY; }
            function fromScroll() { return clamp((scrollY - filmStart()) / range(), 0, 1); }
            function scrollToProgress(p, behavior) { window.scrollTo({ top: filmStart() + clamp(p, 0, 1) * range(), behavior: behavior || 'instant' }); }
            function sceneAt(p) { for (var i = 0; i < bounds.length; i++)
                if (p < bounds[i])
                    return i; return positions.length - 1; }
            function phaseAt(p) { return p < .2525 ? 'edit' : p < .392 ? 'published' : p < .61 ? 'ordered' : p < .70 ? 'preparing' : 'shipped'; }
            function workspaceRect(el) {
                var x = 0, y = 0, n = el;
                while (n && n !== workspace) {
                    x += n.offsetLeft;
                    y += n.offsetTop;
                    n = n.offsetParent;
                }
                return { x: x, y: y, w: el.offsetWidth, h: el.offsetHeight };
            }
            function frames() {
                var w = viewport.clientWidth, h = viewport.clientHeight, mobile = w < 700;
                var wide = Math.min((w - (mobile ? 30 : 120)) / 1320, 1.08), is = mobile ? .56 : wide;
                var intro = { s: is, x: mobile ? w * .5 - 435 * is : (w - 1320 * is) / 2, y: Math.max(copies[0].offsetTop + copies[0].offsetHeight + 26, h * (mobile ? .54 : .49)) };
                var ps = Math.min(1.12, (h - 15) / 590), os = Math.min(1.12, (h - 10) / 620), ss = Math.max(.6, Math.min(.97, (h - 18) / 660));
                var prod = { s: ps, x: w * .74 - 435 * ps, y: h * .54 - 360 * ps };
                var store = { s: ss, x: w * .74 - 1695 * ss, y: h * .51 - 330 * ss };
                var order = { s: os, x: w * .755 - 875 * os, y: h * .52 - 335 * os };
                var ds = Math.min(1.03, (h - 10) / 635), dispatch = { s: ds, x: w * .745 - 1000 * ds, y: h * .52 - 335 * ds };
                function mobileFrame(copy, rect, maxScale) {
                    var short = h < 250, top = short ? 12 : copy.offsetTop + copy.offsetHeight + 21, space = Math.max(24, h - top - 12);
                    var scale = Math.min(maxScale, (w * (short ? .45 : 1) - 30) / rect.w, space / rect.h);
                    return { s: scale, x: w * (short ? .76 : .5) - (rect.x + rect.w * .5) * scale, y: top + (space - rect.h * scale) / 2 - rect.y * scale };
                }
                if (mobile) {
                    var pr = workspaceRect(workspace.querySelector('#ws-product-editor'));
                    prod = mobileFrame(copies[1], { x: pr.x - 10, y: pr.y - 12, w: pr.w + 20, h: pr.h + 24 }, .84);
                    store = mobileFrame(copies[2], { x: 1439, y: 112, w: 512, h: 420 }, .73);
                    var or = workspaceRect(workspace.querySelector('.ws-order-product'));
                    if (!or.w)
                        or = { x: 714, y: 210, w: 320, h: 110 };
                    order = mobileFrame(copies[3], { x: or.x - 12, y: or.y - 70, w: 340, h: or.h + 130 }, .91);
                    var dr = workspaceRect(workspace.querySelector('.ws-order-flow'));
                    if (!dr.w)
                        dr = { x: 714, y: 345, w: 320, h: 250 };
                    dispatch = mobileFrame(copies[4], { x: dr.x - 12, y: dr.y - 40, w: 340, h: dr.h + 58 }, .95);
                }
                var cr = workspaceRect(workspace.querySelector('#ws-customer'));
                if (!cr.w)
                    cr = { x: 1059, y: 60, w: 259, h: 210 };
                var cs = Math.min(1.55, (h - 45) / (cr.h + 95), (w * .48) / (cr.w + 60));
                var customer = { s: cs, x: w * .74 - (cr.x + cr.w * .5) * cs, y: h * .50 - (cr.y + cr.h * .5) * cs };
                if (mobile)
                    customer = mobileFrame(copies[5], { x: cr.x - 16, y: cr.y - 18, w: cr.w + 32, h: cr.h + 36 }, 1.16);
                var fs = mobile ? .48 : wide * .83;
                var final = { s: fs, x: mobile ? w * .5 - 435 * fs : (w - 1320 * fs) / 2, y: Math.max(copies[6].offsetTop + copies[6].offsetHeight + 26, h * (mobile ? .54 : .49)) };
                if (mobile && h < 250) {
                    intro = { s: .35, x: w * .5, y: 12 };
                    final = { s: .32, x: w * .5, y: 12 };
                }
                keys = [{ p: 0, v: intro }, { p: .055, v: intro }, { p: .12, v: prod }, { p: .229, v: prod }, { p: .276, v: store }, { p: .394, v: store }, { p: .441, v: order }, { p: .559, v: order }, { p: .606, v: dispatch }, { p: .726, v: dispatch }, { p: .773, v: customer }, { p: .893, v: customer }, { p: .942, v: final }, { p: 1, v: final }];
            }
            function cameraAt(p) {
                for (var i = 1; i < keys.length; i++)
                    if (p <= keys[i].p) {
                        var a = keys[i - 1], b = keys[i], t = smooth((p - a.p) / (b.p - a.p));
                        return { x: mix(a.v.x, b.v.x, t), y: mix(a.v.y, b.v.y, t), s: mix(a.v.s, b.v.s, t) };
                    }
                return keys[keys.length - 1].v;
            }
            var fades = [[0, 0, .055, .11], [.07, .12, .2325, .2525], [.2525, .2725, .3975, .4175], [.4175, .4375, .5625, .5825], [.5825, .6025, .73, .75], [.75, .77, .8975, .9175], [.9175, .9375, 1, 1]];
            function opacity(i, p) { var f = fades[i]; var incoming = i === 0 ? 1 : smooth((p - f[0]) / (f[1] - f[0])); var outgoing = i === positions.length - 1 ? 1 : 1 - smooth((p - f[2]) / (f[3] - f[2])); return incoming * outgoing; }
            function syncProduct() {
                var id = api.getState().productId || 'shirt', product = api.getProduct(id);
                var storeImage = storeScene.querySelector('img');
                if (productImages[id])
                    storeImage.src = productImages[id];
                storeImage.dataset.product = id;
                $('#storeSize').hidden = id !== 'shirt';
                storeScene.querySelector('label[for="storeSize"]').hidden = id !== 'shirt';
                storeScene.querySelector('.store-details').textContent = id === 'shirt' ? 'Siyah · Sade tasarım' : product.category + ' · Mağazanızda görünüyor';
                document.querySelectorAll('[data-store-name]').forEach(function (el) { el.textContent = product.name; });
                document.querySelectorAll('[data-store-price]').forEach(function (el) { el.textContent = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 2, minimumFractionDigits: 0 }).format(product.price); });
                storeScene.querySelector('img').alt = product.name;
                $('#finaleProduct').textContent = product.name;
                $('#finaleProductImage').src = productImages[id] || '';
                $('#storyEntity').textContent = product.name.length > 24 ? product.name.slice(0, 23) + '…' : product.name;
                $('#storeSize').value = api.getState().order && api.getState().order.size || 'M';
                $('#storeBuy').disabled = !api.getState().hasOrder && (product.stock === 'Tükendi' || product.stockCount === 0);
                $('#storeBuy').textContent = api.getState().hasOrder ? 'Siparişi panelde inceleyin →' : $('#storeBuy').disabled ? 'Ürün stokta değil' : 'Örnek sipariş oluştur →';
                Array.from($('#storeQuantity').options).forEach(function (o) { o.disabled = Number(o.value) > product.stockCount; });
                if (Number($('#storeQuantity').value) > product.stockCount)
                    $('#storeQuantity').value = '1';
            }
            function confirmStore(visible) { visible = visible && api.getState().hasOrder; $('#storeConfirmation').classList.toggle('is-visible', visible); $('#storeConfirmation').setAttribute('aria-hidden', String(!visible)); }
            function syncPhase(p) {
                if (anyDialog())
                    return;
                var phase = phaseAt(p);
                if (manualScene !== null) {
                    if (sceneAt(p) === manualScene)
                        return;
                    manualScene = null;
                    manualOrderLabel = '';
                    activePhase = '';
                }
                if (phase !== activePhase) {
                    activePhase = phase;
                    api.storyPhase(phase);
                    workspace.dataset.storyPhase = api.getState().phase;
                    syncProduct();
                    frames();
                }
                confirmStore(p >= .392 && p < .445 && api.getState().hasOrder);
            }
            function draw(p) {
                var scene = sceneAt(p), visual = reduced() ? positions[scene] : p;
                syncPhase(visual);
                var v = cameraAt(visual), weights = [];
                camera.style.transform = 'translate3d(' + v.x.toFixed(2) + 'px,' + v.y.toFixed(2) + 'px,0) scale(' + v.s.toFixed(4) + ')';
                copies.forEach(function (copy, i) {
                    var o = reduced() ? (i === scene ? 1 : 0) : opacity(i, p);
                    weights.push(o);
                    copy.style.opacity = o.toFixed(3);
                    copy.style.transform = 'translate3d(0,' + ((1 - o) * 15).toFixed(2) + 'px,0)';
                    copy.style.visibility = o < .001 ? 'hidden' : 'visible';
                    var visible = i === scene && o > .5;
                    copy.inert = !visible;
                    copy.setAttribute('aria-hidden', String(!visible));
                });
                $('#veil').style.opacity = (1 - Math.max(weights[0], weights[6])).toFixed(3);
                $('#timelineFill').style.width = (p * 100).toFixed(3) + '%';
                if (document.activeElement !== $('#timelineRange'))
                    $('#timelineRange').value = Math.round(p * 1000);
                var displayName = scene >= 3 && scene <= 5 && !api.getState().hasOrder ? 'Sipariş bekleniyor' : names[scene];
                $('#sceneName').textContent = displayName;
                $('#timelineRange').setAttribute('aria-valuetext', displayName + ', yüzde ' + Math.round(p * 100));
                stage.dataset.scene = String(scene);
                stage.dataset.progress = p.toFixed(3);
                if (scene !== activeScene) {
                    activeScene = scene;
                    $('#sceneNumber').textContent = String(scene + 1).padStart(2, '0');
                    $('#sceneName').textContent = displayName;
                    $('#frameHint').textContent = hints[scene];
                    document.querySelectorAll('.chapters [data-jump]').forEach(function (b) { b.setAttribute('aria-current', String(Number(b.dataset.jump) === scene)); });
                }
                syncPhase(visual);
                var phase = api.getState().phase, states = { edit: 'Yayına hazırlanıyor', published: 'Mağazanızda görünüyor', ordered: 'Sipariş #1042 alındı', preparing: 'Sipariş hazırlanıyor', shipped: 'Sipariş gönderildi' };
                var storyProduct = api.getProduct(api.getState().productId);
                var unavailable = !api.getState().hasOrder && (storyProduct.stockCount === 0 || storyProduct.stock === 'Tükendi');
                $('#storyStatus').textContent = unavailable && scene >= 3 ? 'Stokta yok · Sipariş oluşturulamaz' : manualScene === scene ? 'Sipariş ' + manualOrderLabel.toLocaleLowerCase('tr') : states[phase];
                if (scene === 5 && !unavailable)
                    $('#storyStatus').textContent = 'Müşterinizin siparişi';
                $('#storyState').classList.toggle('is-visible', scene > 0 && scene < 6);
                $('#storyState').setAttribute('aria-hidden', String(!(scene > 0 && scene < 6)));
                $('#scrollCue').style.opacity = (1 - smooth((p - .035) / .055)).toFixed(3);
            }
            function stop() { playing = false; $('#playButton').setAttribute('aria-pressed', 'false'); $('#playLabel').textContent = reduced() ? 'Sonraki sahne' : target > .995 ? 'Yeniden oynat' : 'Sunumu oynat'; }
            function tick(now) {
                var dt = lastTime ? Math.min(now - lastTime, 70) : 16;
                lastTime = now;
                if (playing) {
                    playProgress = clamp(playProgress + dt / 24000, 0, 1);
                    target = playProgress;
                    scrollToProgress(target);
                    if (target >= 1)
                        stop();
                }
                progress = reduced() ? target : Math.abs(target - progress) < .00005 ? target : mix(progress, target, 1 - Math.exp(-dt / 55));
                draw(progress);
                if (playing || Math.abs(target - progress) > .00005)
                    raf = requestAnimationFrame(tick);
                else {
                    raf = 0;
                    lastTime = 0;
                }
            }
            function schedule() { if (!raf)
                raf = requestAnimationFrame(tick); }
            function storyControls(visible) { var controls = $('#filmControls'); controls.inert = !visible; controls.setAttribute('aria-hidden', String(!visible)); var skip = $('.skip'); skip.setAttribute('href', visible ? '#filmControls' : '#beginStory'); skip.textContent = visible ? 'Film kontrollerine geç' : 'Sunumu başlat'; }
            function resetOpening(focus) {
                clearTimeout(openingTimer);
                openingTimer = 0;
                beginning = false;
                hasStarted = false;
                stop();
                film.dataset.storyStarted = 'false';
                delete film.dataset.starting;
                storyControls(false);
                progress = target = playProgress = 0;
                activePhase = '';
                frames();
                scrollToProgress(0);
                draw(0);
                if (focus)
                    document.querySelector('[data-begin-story]').focus({ preventScroll: true });
            }
            function beginStory(index, autoplay, instant) {
                if (beginning)
                    return;
                stop();
                beginning = true;
                film.dataset.starting = 'true';
                var activate = function () {
                    openingTimer = 0;
                    beginning = false;
                    hasStarted = true;
                    film.dataset.storyStarted = 'true';
                    delete film.dataset.starting;
                    storyControls(true);
                    var i = clamp(Number(index) || 1, 1, positions.length - 1);
                    progress = target = playProgress = !reduced() && i === 1 ? .12 : positions[i];
                    activePhase = '';
                    frames();
                    scrollToProgress(target);
                    draw(progress);
                    if (autoplay && !reduced() && !anyDialog() && !document.hidden) {
                        playing = true;
                        $('#playButton').setAttribute('aria-pressed', 'true');
                        $('#playLabel').textContent = 'Duraklat';
                    }
                    else
                        stop();
                    if (!anyDialog())
                        $('#playButton').focus({ preventScroll: true });
                    schedule();
                };
                if (instant || reduced())
                    activate();
                else
                    openingTimer = setTimeout(activate, 220);
            }
            function jump(index, instant) {
                var i = clamp(Number(index), 0, positions.length - 1);
                if (i === 0) {
                    resetOpening(true);
                    return;
                }
                if (!hasStarted) {
                    beginStory(i, !instant, instant);
                    return;
                }
                stop();
                if (instant || reduced()) {
                    target = positions[i];
                    progress = target;
                    scrollToProgress(target);
                    draw(progress);
                }
                else
                    scrollToProgress(positions[i], 'smooth');
            }
            lifecycle.listen(document.querySelector('[data-begin-story]'), 'click', function () { beginStory(1, true, false); });
            function lock() { lifecycle.lockScroll(); }
            function unlock() { if (!anyDialog())
                lifecycle.unlockScroll(); }
            function anyDialog() { return panelDialog.open || storeDialog.open || actionDialog.open || composerDialog.open || exploreDialog.open; }
            function panelScene(focus) { return focus === 'customer' ? 5 : focus === 'orders' ? (api.getState().orderPhase >= 1 ? 4 : 3) : focus === 'store' ? 2 : 1; }
            function panelView(focus) {
                if (panelDialog.open) {
                    pendingScene = panelScene(focus);
                    if (manualScene !== null && (focus === 'customer' || focus === 'orders'))
                        manualScene = pendingScene;
                }
                $('#panelHost').dataset.panelView = focus;
                document.querySelectorAll('[data-panel-tab]').forEach(function (b) { b.setAttribute('aria-current', String(b.dataset.panelTab === focus)); });
                if (innerWidth < 701) {
                    $('#panelScroll').scrollTop = 0;
                    $('#panelScroll').scrollLeft = 0;
                }
                else if (innerWidth < 1380) {
                    var offsets = { products: 170, orders: 675, customer: 1050, store: 1050 };
                    $('#panelScroll').scrollTo({ left: offsets[focus] || 0, behavior: reduced() ? 'instant' : 'smooth' });
                }
            }
            function openPanel(focus) {
                stop();
                if (!anyDialog())
                    returnFocus = document.activeElement;
                pendingScene = panelScene(focus || 'products');
                if (actionDialog.open) {
                    handoffClosures.add(actionDialog);
                    actionDialog.close();
                }
                if (exploreDialog.open) {
                    handoffClosures.add(exploreDialog);
                    exploreDialog.close();
                }
                if (composerDialog.open) {
                    handoffClosures.add(composerDialog);
                    composerDialog.close();
                }
                if (storeDialog.open) {
                    handoffClosures.add(storeDialog);
                    storeDialog.close();
                }
                $('#panelHost').appendChild(workspace);
                panelDialog.showModal();
                lock();
                if ((focus === 'orders' || focus === 'customer') && !api.getState().hasOrder) {
                    if (api.storyPhase('ordered'))
                        activePhase = 'ordered';
                }
                panelView(focus || 'products');
                api.focus(focus || 'products');
            }
            lifecycle.listen(panelDialog, 'close', function () {
                camera.prepend(workspace);
                if (handoffClosures.delete(panelDialog) || anyDialog())
                    return;
                unlock();
                frames();
                var scene = pendingScene;
                pendingScene = null;
                activePhase = '';
                if (scene !== null)
                    jump(scene, true);
                restoreFocus();
                schedule();
            });
            function openStore() {
                stop();
                returnFocus = document.activeElement;
                pendingScene = null;
                if (!api.getState().published) {
                    api.storyPhase('published');
                    activePhase = 'published';
                }
                syncProduct();
                confirmStore(false);
                $('#storeHost').appendChild(storeScene);
                storeDialog.showModal();
                lock();
            }
            lifecycle.listen(storeDialog, 'close', function () {
                camera.appendChild(storeScene);
                if (handoffClosures.delete(storeDialog) || anyDialog())
                    return;
                unlock();
                frames();
                var scene = pendingScene;
                pendingScene = null;
                activePhase = '';
                if (scene !== null)
                    jump(scene, true);
                restoreFocus();
                schedule();
            });
            lifecycle.listen(actionDialog, 'close', function () { if (handoffClosures.delete(actionDialog) || anyDialog())
                return; unlock(); restoreFocus(); });
            document.querySelectorAll('[data-jump]').forEach(function (b) { lifecycle.listen(b, 'click', function () { jump(b.dataset.jump); }); });
            lifecycle.listen(document.querySelector('.brand'), 'click', function (e) { e.preventDefault(); jump(0); });
            document.querySelectorAll('[data-panel]').forEach(function (b) { lifecycle.listen(b, 'click', function () { openPanel(b.dataset.panel); }); });
            document.querySelectorAll('[data-store]').forEach(function (b) { lifecycle.listen(b, 'click', openStore); });
            document.querySelectorAll('[data-panel-tab]').forEach(function (b) { lifecycle.listen(b, 'click', function () { api.focus(b.dataset.panelTab); }); });
            document.querySelectorAll('[data-close]').forEach(function (b) { lifecycle.listen(b, 'click', function () { b.closest('dialog').close(); }); });
            [panelDialog, storeDialog, actionDialog, composerDialog, exploreDialog].forEach(function (d) { lifecycle.listen(d, 'click', function (e) { if (e.target === d) {
                var r = d.getBoundingClientRect();
                if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
                    d.close();
            } }); });
            document.querySelectorAll('[data-action]').forEach(function (b) {
                lifecycle.listen(b, 'click', function () {
                    stop();
                    returnFocus = b;
                    $('#actionDescription').textContent = 'Mağazanızı oluşturmak için kayıt sayfasına geçin. İsterseniz önce demo panelini inceleyin.';
                    actionDialog.showModal();
                    lock();
                });
            });
            lifecycle.listen($('#actionPanel'), 'click', function () { openPanel('products'); });
            lifecycle.listen($('#resetDemo'), 'click', function () { try {
                sessionStorage.removeItem(sessionKey);
            }
            catch (e) { } location.reload(); });
            lifecycle.listen($('#storeBuy'), 'click', function () {
                if (api.getState().hasOrder) {
                    openPanel('orders');
                    pendingScene = 3;
                    return;
                }
                var result = api.createStoreOrder({ size: $('#storeSize').value, quantity: Number($('#storeQuantity').value) });
                if (result) {
                    confirmStore(true);
                    $('#storeBuy').textContent = 'Siparişi panelde inceleyin →';
                    pendingScene = 3;
                    saveProducts();
                }
                else
                    toast('Stok ve adet bilgisini kontrol edin.');
            });
            lifecycle.listen(document, 'celebix-commerce:focus', function (e) { if (panelDialog.open)
                panelView(e.detail.target); });
            lifecycle.listen(document, 'celebix-commerce:saved', function () { syncProduct(); if (panelDialog.open)
                toast('Ürün bilgileri güncellendi.'); });
            lifecycle.listen(document, 'celebix-commerce:published', function () {
                syncProduct();
                activePhase = 'published';
                if (panelDialog.open) {
                    panelView('store');
                    pendingScene = 2;
                    toast('Ürününüz mağazanızda yayımlandı.');
                }
                else
                    jump(2);
            });
            lifecycle.listen(document, 'celebix-commerce:order-created', function () {
                activePhase = 'ordered';
                pendingScene = 3;
                if (panelDialog.open) {
                    panelView('orders');
                    toast('Yeni siparişiniz panelde.');
                }
                else if (storeDialog.open) {
                    confirmStore(true);
                    toast('Sipariş hazır. Panelde inceleyebilirsiniz.');
                }
                else
                    jump(3);
            });
            lifecycle.listen(document, 'celebix-commerce:order', function (e) { if (panelDialog.open) {
                pendingScene = e.detail.phase >= 1 ? 4 : 3;
                manualScene = pendingScene;
                manualOrderLabel = e.detail.label;
            } });
            function toast(message) { clearTimeout(toastTimer); $('#toast').textContent = message; $('#toast').classList.add('visible'); toastTimer = setTimeout(function () { $('#toast').classList.remove('visible'); }, 2600); }
            lifecycle.listen(window, 'scroll', function () { if (!hasStarted) {
                target = 0;
                return;
            } if (!playing) {
                target = fromScroll();
                if (target <= .11) {
                    resetOpening(false);
                    return;
                }
            } schedule(); }, { passive: true });
            lifecycle.listen(window, 'wheel', stop, { passive: true });
            lifecycle.listen(window, 'touchstart', function (e) { if (!e.target.closest('#playButton'))
                stop(); }, { passive: true });
            lifecycle.listen(window, 'pointerdown', function (e) { if (!e.target.closest('#playButton'))
                stop(); }, { passive: true });
            lifecycle.listen(window, 'resize', function () { frames(); target = progress; scrollToProgress(target); schedule(); });
            lifecycle.listen(reduce, 'change', function () { stop(); schedule(); });
            lifecycle.listen(document, 'visibilitychange', function () { if (document.hidden)
                stop(); });
            lifecycle.listen($('#timelineRange'), 'input', function (e) { stop(); target = Number(e.target.value) / 1000; if (target <= .11) {
                resetOpening(true);
                return;
            } scrollToProgress(target); schedule(); });
            lifecycle.listen($('#playButton'), 'click', function () {
                if (playing) {
                    stop();
                    return;
                }
                if (reduced()) {
                    jump((activeScene + 1) % positions.length);
                    return;
                }
                if (target > .995) {
                    target = .12;
                    progress = .12;
                    activePhase = '';
                    scrollToProgress(.12);
                }
                playProgress = target;
                playing = true;
                $('#playButton').setAttribute('aria-pressed', 'true');
                $('#playLabel').textContent = 'Duraklat';
                schedule();
            });
            lifecycle.listen(window, 'keydown', function (e) {
                if (!hasStarted || anyDialog() || e.target.closest('input,select,textarea,button,a'))
                    return;
                if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].indexOf(e.key) === -1)
                    return;
                e.preventDefault();
                stop();
                if (e.key === 'Home')
                    jump(0);
                else if (e.key === 'End')
                    jump(positions.length - 1);
                else
                    jump(activeScene + (e.key === 'ArrowRight' ? 1 : -1));
            });
            function restoreFocus() {
                if (anyDialog())
                    return;
                var el = returnFocus;
                returnFocus = null;
                if (el && el.isConnected && !el.disabled && el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden' && !el.closest('[inert]'))
                    el.focus({ preventScroll: true });
                else
                    (hasStarted ? $('#playButton') : document.querySelector('[data-begin-story]')).focus({ preventScroll: true });
            }
            function saveProducts() {
                try {
                    sessionStorage.setItem(sessionKey, JSON.stringify({ snapshot: api.exportSession(), motion: motionChoice }));
                }
                catch (e) { }
            }
            function restoreProducts() {
                try {
                    var stored = JSON.parse(sessionStorage.getItem(sessionKey) || 'null');
                    if (stored && stored.snapshot) {
                        var imported = api.importSession(stored.snapshot);
                        if (imported.ok)
                            api.resetNarrative();
                        motionChoice = stored.motion === true;
                    }
                }
                catch (e) { }
                updateMotion();
            }
            function updateMotion() {
                root.dataset.reduced = String(reduced());
                $('[data-story-label]').textContent = reduced() ? 'Hikâyeyi keşfet' : 'Hikâyeyi izle';
                $('[data-story-time]').textContent = reduced() ? '7 sahne' : '21 sn';
                $('[data-begin-story]').setAttribute('aria-label', reduced() ? 'Hikâyeyi keşfet — sahneleri elle ilerlet' : 'Hikâyeyi izle — 21 saniyelik sunum');
                ['#motionToggle', '#motionToggleMobile'].forEach(function (id) { $(id).setAttribute('aria-checked', String(reduced())); $(id).disabled = reduce.matches; $(id).title = reduce.matches ? 'Cihazınızda azaltılmış hareket etkin.' : ''; });
                document.querySelectorAll('[data-motion-note]').forEach(function (el) { el.textContent = reduce.matches ? 'Cihazınızda hareket azaltma açık.' : 'Hareketi azaltın.'; });
                stop();
                frames();
                draw(progress);
            }
            ['#motionToggle', '#motionToggleMobile'].forEach(function (id) { lifecycle.listen($(id), 'click', function () { if (reduce.matches)
                return; motionChoice = !motionChoice; updateMotion(); saveProducts(); }); });
            lifecycle.listen(reduce, 'change', updateMotion);
            function chooseCompose(id) {
                if (!api.getProduct(id))
                    return;
                if (composerDialog.open && composeId) {
                    composeDrafts[composeId] = { name: $('#composeName').value, price: $('#composePrice').value, stockCount: $('#composeStock').value };
                }
                composeId = id;
                var p = composeDrafts[id] || api.getProduct(id);
                $('#composeName').value = p.name;
                $('#composePrice').value = p.price;
                $('#composeStock').value = p.stockCount;
                $('#composerPreview').src = productImages[id];
                $('#composerPreview').alt = api.getProduct(id).name;
                $('#composeError').textContent = '';
                document.querySelectorAll('[data-compose-product]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.composeProduct === id)); });
            }
            document.querySelectorAll('[data-compose]').forEach(function (b) {
                lifecycle.listen(b, 'click', function () {
                    stop();
                    returnFocus = b;
                    composeDrafts = {};
                    composeId = api.getState().productId || 'shirt';
                    chooseCompose(composeId);
                    composerDialog.showModal();
                    lock();
                });
            });
            document.querySelectorAll('[data-compose-product]').forEach(function (b) { lifecycle.listen(b, 'click', function () { chooseCompose(b.dataset.composeProduct); }); });
            lifecycle.listen(composerDialog, 'close', function () { if (handoffClosures.delete(composerDialog) || anyDialog())
                return; unlock(); restoreFocus(); });
            lifecycle.listen($('#composerForm'), 'submit', function (e) {
                e.preventDefault();
                if (!e.currentTarget.reportValidity())
                    return;
                var result = api.configureProduct(composeId, { name: $('#composeName').value, price: Number($('#composePrice').value), stockCount: Number($('#composeStock').value), stock: 'Stokta' });
                if (!result.ok) {
                    $('#composeError').textContent = result.error || 'Ürün bilgilerini kontrol edin.';
                    return;
                }
                api.resetNarrative();
                manualScene = null;
                manualOrderLabel = '';
                activePhase = '';
                pendingScene = null;
                syncProduct();
                saveProducts();
                composerDialog.close();
                target = positions[1];
                progress = target;
                scrollToProgress(target);
                frames();
                draw(progress);
                if (!reduced()) {
                    playProgress = target;
                    playing = true;
                    $('#playButton').setAttribute('aria-pressed', 'true');
                    $('#playLabel').textContent = 'Duraklat';
                    schedule();
                }
                $('#playButton').focus({ preventScroll: true });
            });
            ['celebix-commerce:saved', 'celebix-commerce:published', 'celebix-commerce:order-created', 'celebix-commerce:order'].forEach(function (eventName) { lifecycle.listen(document, eventName, saveProducts); });
            function selectExplore(key, focus) {
                var buttons = Array.from(document.querySelectorAll('[data-explore-tab]'));
                if (!buttons.some(function (b) { return b.dataset.exploreTab === key; }))
                    key = 'products';
                buttons.forEach(function (b) { var active = b.dataset.exploreTab === key; b.setAttribute('aria-selected', String(active)); b.tabIndex = active ? 0 : -1; if (active && focus)
                    b.focus(); });
                document.querySelectorAll('.explore-panel').forEach(function (p) { p.hidden = p.id !== 'explorePanel-' + key; });
                var list = exploreDialog.querySelector('[role=tablist]');
                list.setAttribute('aria-orientation', innerWidth < 701 ? 'horizontal' : 'vertical');
            }
            document.querySelectorAll('[data-explore]').forEach(function (b) { lifecycle.listen(b, 'click', function () { stop(); returnFocus = b; selectExplore(b.dataset.explore, false); exploreDialog.showModal(); lock(); }); });
            document.querySelectorAll('[data-explore-tab]').forEach(function (b) { lifecycle.listen(b, 'click', function () { selectExplore(b.dataset.exploreTab, false); }); });
            lifecycle.listen(exploreDialog.querySelector('[role=tablist]'), 'keydown', function (e) {
                if (['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].indexOf(e.key) < 0)
                    return;
                var bs = Array.from(document.querySelectorAll('[data-explore-tab]')), i = bs.indexOf(document.activeElement);
                if (i < 0)
                    return;
                e.preventDefault();
                var n = e.key === 'Home' ? 0 : e.key === 'End' ? bs.length - 1 : (i + (e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1) + bs.length) % bs.length;
                selectExplore(bs[n].dataset.exploreTab, true);
            });
            document.querySelectorAll('[data-explore-demo]').forEach(function (b) { lifecycle.listen(b, 'click', function () { openPanel(b.dataset.exploreDemo); }); });
            lifecycle.listen(exploreDialog, 'close', function () { if (handoffClosures.delete(exploreDialog) || anyDialog())
                return; unlock(); restoreFocus(); });
            lifecycle.listen(window, 'keydown', function (e) {
                if (!playing || e.target.closest('input,select,textarea,[contenteditable]'))
                    return;
                if (e.target.closest('#playButton') && [' ', 'Spacebar', 'Enter'].includes(e.key))
                    return;
                if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'Spacebar'].includes(e.key))
                    stop();
            });
            ['shirt', 'lamp', 'notebook'].forEach(function (id) { var url = '/commerce-v6/' + id + '.svg'; productImages[id] = url; document.querySelectorAll('img[data-product="' + id + '"]').forEach(function (img) { img.src = url; }); });
            if ('scrollRestoration' in history)
                history.scrollRestoration = 'manual';
            restoreProducts();
            resetOpening(false);
            syncProduct();
        })();
    }
    catch (error) {
        dispose();
        throw error;
    }
    instances.set(root, dispose);
    return dispose;
}
