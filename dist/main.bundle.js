"use strict";
(self["webpackChunkto_do"] = self["webpackChunkto_do"] || []).push([["main"],{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var sidebar_1 = __webpack_require__(/*! ./views/sidebar */ "./src/views/sidebar.ts");
var container = document.getElementById('content');
container.append((0, sidebar_1.createSidebar)());


/***/ }),

/***/ "./src/views/sidebar.ts":
/*!******************************!*\
  !*** ./src/views/sidebar.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSidebar = void 0;
function renderTaskLists(list) {
}
function createSidebar() {
    var sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    var dueToday = document.createElement('p');
    dueToday.textContent = "Due Today";
    dueToday.classList.add('sidebar-header');
    var listsHeader = document.createElement('p');
    listsHeader.textContent = "Lists";
    listsHeader.classList.add('sidebar-header');
    var lists = document.createElement('ul');
    lists.classList.add('task-lists');
    renderTaskLists([]);
    var addNewListBtn = document.createElement('li');
    addNewListBtn.textContent = "New List";
    addNewListBtn.classList.add('add-new-list-btn', 'task-lists-item');
    lists.append(addNewListBtn);
    sidebar.append(dueToday, listsHeader, lists);
    return sidebar;
}
exports.createSidebar = createSidebar;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCLG1CQUFPLENBQUMsK0NBQWlCO0FBQ3pDO0FBQ0E7Ozs7Ozs7Ozs7O0FDSmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3ZpZXdzL3NpZGViYXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNpZGViYXJfMSA9IHJlcXVpcmUoXCIuL3ZpZXdzL3NpZGViYXJcIik7XHJcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5jb250YWluZXIuYXBwZW5kKCgwLCBzaWRlYmFyXzEuY3JlYXRlU2lkZWJhcikoKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuY3JlYXRlU2lkZWJhciA9IHZvaWQgMDtcclxuZnVuY3Rpb24gcmVuZGVyVGFza0xpc3RzKGxpc3QpIHtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCkge1xyXG4gICAgdmFyIHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xyXG4gICAgdmFyIGR1ZVRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZHVlVG9kYXkudGV4dENvbnRlbnQgPSBcIkR1ZSBUb2RheVwiO1xyXG4gICAgZHVlVG9kYXkuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oZWFkZXInKTtcclxuICAgIHZhciBsaXN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxpc3RzSGVhZGVyLnRleHRDb250ZW50ID0gXCJMaXN0c1wiO1xyXG4gICAgbGlzdHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oZWFkZXInKTtcclxuICAgIHZhciBsaXN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBsaXN0cy5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3RzJyk7XHJcbiAgICByZW5kZXJUYXNrTGlzdHMoW10pO1xyXG4gICAgdmFyIGFkZE5ld0xpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgYWRkTmV3TGlzdEJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IExpc3RcIjtcclxuICAgIGFkZE5ld0xpc3RCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLW5ldy1saXN0LWJ0bicsICd0YXNrLWxpc3RzLWl0ZW0nKTtcclxuICAgIGxpc3RzLmFwcGVuZChhZGROZXdMaXN0QnRuKTtcclxuICAgIHNpZGViYXIuYXBwZW5kKGR1ZVRvZGF5LCBsaXN0c0hlYWRlciwgbGlzdHMpO1xyXG4gICAgcmV0dXJuIHNpZGViYXI7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVTaWRlYmFyID0gY3JlYXRlU2lkZWJhcjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9