(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pc\Documents\Proyectos\genefa-front\src\main.ts */"zUnb");


/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "3TnI":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "WSaj");
/* harmony import */ var _auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-layout.component.scss */ "FkQd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, modalService) {
        var _this = this;
        this.router = router;
        this.modalService = modalService;
        this.test = new Date();
        this.sidebarColor = "red";
        this.isCollapsed = true;
        this.mobile_menu_visible = 0;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('navbar-transparent');
            }
        };
    }
    AuthLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AuthLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = document.getElementsByClassName('navbar')[0];
        window.addEventListener("resize", this.updateColor);
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName("close-layer")[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
        this.menuItems = _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].filter(function (menuItem) { return menuItem; });
        // on this page, we need on the body tag the classes .rtl and .menu-on-right
        document.body.classList.add("rtl", "menu-on-right");
        // we also need the rtl bootstrap
        // so we add it dynamically to the head
        var head = document.head;
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.id = "rtl-id";
        link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.css";
        head.appendChild(link);
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        // when we exit this page, we need to delete the classes .rtl and .menu-on-right
        // from the body tag
        document.body.classList.remove("rtl", "menu-on-right");
        // we also need to delete the rtl bootstrap, so it does not break the other pages
        // that do not make use of rtl
        document.getElementById("rtl-id").remove();
    };
    AuthLayoutComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName("nav")[0];
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("bg-white");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("bg-white");
        }
    };
    AuthLayoutComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    AuthLayoutComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    };
    AuthLayoutComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName("html")[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove("nav-open");
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove("toggled");
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add("toggled");
            }, 430);
            var $layer = document.createElement("div");
            $layer.setAttribute("class", "close-layer");
            if (html.querySelectorAll(".main-panel")) {
                document.getElementsByClassName("main-panel")[0].appendChild($layer);
            }
            else if (html.classList.contains("off-canvas-sidebar")) {
                document
                    .getElementsByClassName("wrapper-full-page")[0]
                    .appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add("visible");
            }, 100);
            $layer.onclick = function () {
                //asign a function
                html.classList.remove("nav-open");
                this.mobile_menu_visible = 0;
                $layer.classList.remove("visible");
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove("toggled");
                }, 400);
            }.bind(this);
            html.classList.add("nav-open");
            this.mobile_menu_visible = 1;
        }
    };
    AuthLayoutComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AuthLayoutComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
    ]; };
    AuthLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-auth-layout',
            template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "78Dz":
/*!*********************************************************************!*\
  !*** ./src/app/components/cliente-form/cliente-form.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "8hWZ":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente-form/cliente-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" row\">\r\n    <div class=\" col-md-12\">\r\n      <div class=\" card\">\r\n        \r\n        <form [formGroup]=\"form\" (ngSubmit)=\"saveForm($event)\">\r\n        <div class=\" card-header\"><h5 class=\" title\">Nuevo cliente</h5></div>\r\n        <div class=\" card-body\">\r\n            <div class=\" row\">\r\n              <div class=\" col-md-3 \">\r\n                <div class=\" form-group\">\r\n                  <label> RFC </label>\r\n                  <input\r\n                    formControlName=\"rfc\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"RFC\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-3 offset-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> CURP </label>\r\n                  <input\r\n                  formControlName=\"curp\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"CURP\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-3 offset-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> NSS </label>\r\n                  <input\r\n                  formControlName=\"nss\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"NSS\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <hr>\r\n            <div class=\" row\">\r\n              <div class=\" col-md-4\">\r\n                <div class=\" form-group\">\r\n                  <label> Nombre </label>\r\n                  <input\r\n                  formControlName=\"nombre\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Nombre\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-4\">\r\n                <div class=\" form-group\">\r\n                  <label> Apaterno </label>\r\n                  <input\r\n                  formControlName=\"apaterno\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Apellido paterno\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-4\">\r\n                <div class=\" form-group\">\r\n                  <label> Amaterno </label>\r\n                  <input\r\n                  formControlName=\"amaterno\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Apellido materno\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <div class=\" row\">\r\n              <div class=\" col-md-4\">\r\n                <div class=\" form-group\">\r\n                  <label> Email </label>\r\n                  <input\r\n                  formControlName=\"email\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"email\"\r\n                    type=\"email\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <hr>\r\n            <div class=\" row\">\r\n              <div class=\" col-md-4 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Calle </label>\r\n                  <input\r\n                  formControlName=\"calle\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Calle\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-2 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Numero exterior </label>\r\n                  <input\r\n                  formControlName=\"n_ext\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Exterior\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-2 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Numero interior </label>\r\n                  <input\r\n                  formControlName=\"n_int\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Interior\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\" col-md-4 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Colonia </label>\r\n                  <input\r\n                  formControlName=\"colonia\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Colonia\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\" row\">\r\n              <div class=\" col-md-4 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Estado </label>\r\n                  <select \r\n                    class=\"form-control\"\r\n                    id=\"\"\r\n                    formControlName=\"estado\"\r\n                    (change)=\"this.getMunicipios()\">\r\n                    <option *ngFor=\"let item of this.estados\" value=\"{{item}}\">{{item}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-4 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Municipio </label>\r\n                  <select \r\n                  class=\"form-control\"\r\n                  id=\"\"\r\n                  formControlName=\"municipio\">\r\n                  <option *ngFor=\"let item of this.municipios\" value=\"{{item}}\">{{item}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-2 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Codigo postal </label>\r\n                  <input\r\n                    class=\" form-control\"\r\n                    placeholder=\"C.P.\"\r\n                    type=\"text\"\r\n                    formControlName=\"cp\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-2 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> C.R. </label>\r\n                  <input\r\n                    class=\" form-control\"\r\n                    placeholder=\"C.R.\"\r\n                    type=\"text\"\r\n                    formControlName=\"cr\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <hr>\r\n            <div class=\" row\">\r\n              <div class=\" col-md-12\">\r\n                <div class=\" form-group\">\r\n                  <label> Comentarios </label>\r\n                  <textarea\r\n                    class=\" form-control\"\r\n                    cols=\"80\"\r\n                    placeholder=\"Puedes agregar un comentario sobre el nuevo cliente\"\r\n                    rows=\"4\"\r\n                    formControlName=\"comentarios\"\r\n                  ></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class=\" card-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 offset-md-8\">\r\n                <button class=\"form-control btn btn-fill btn-danger\" (click)=\"this.reset()\" type=\"button\">Cancelar</button>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <button class=\"form-control btn btn-fill btn-success\" type=\"submit\">Guardar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n      </form>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "ADbd":
/*!*******************************************************************!*\
  !*** ./src/app/components/cliente-form/cliente-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClienteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteFormComponent", function() { return ClienteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cliente_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cliente-form.component.html */ "8hWZ");
/* harmony import */ var _cliente_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-form.component.scss */ "78Dz");
/* harmony import */ var _services_s_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/s-clientes.service */ "ccX7");
/* harmony import */ var _services_s_municipios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/s-municipios.service */ "raJY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









var ClienteFormComponent = /** @class */ (function () {
    function ClienteFormComponent(sMunicipios, formB, sClientes, router) {
        this.sMunicipios = sMunicipios;
        this.formB = formB;
        this.sClientes = sClientes;
        this.router = router;
        this.data = {
            "Aguascalientes": [
                "Aguascalientes",
                "Asientos",
                "Calvillo",
                "Cos??o",
                "Jes??s Mar??a",
                "Pabell??n de Arteaga",
                "Rinc??n de Romos",
                "San Jos?? de Gracia",
                "Tepezal??",
                "El Llano",
                "San Francisco de los Romo"
            ],
            "Baja California": [
                "Ensenada",
                "Mexicali",
                "Tecate",
                "Tijuana",
                "Playas de Rosarito"
            ],
            "Baja California Sur": [
                "Comond??",
                "Muleg??",
                "La Paz",
                "Los Cabos",
                "Loreto"
            ],
            "Campeche": [
                "Calkin??",
                "Campeche",
                "Carmen",
                "Champot??n",
                "Hecelchak??n",
                "Hopelch??n",
                "Palizada",
                "Tenabo",
                "Esc??rcega",
                "Calakmul",
                "Candelaria"
            ],
            "Coahuila de Zaragoza": [
                "Abasolo",
                "Acu??a",
                "Allende",
                "Arteaga",
                "Candela",
                "Casta??os",
                "Cuatro Ci??negas",
                "Escobedo",
                "Francisco I. Madero",
                "Frontera",
                "General Cepeda",
                "Guerrero",
                "Hidalgo",
                "Jim??nez",
                "Ju??rez",
                "Lamadrid",
                "Matamoros",
                "Monclova",
                "Morelos",
                "M??zquiz",
                "Nadadores",
                "Nava",
                "Ocampo",
                "Parras",
                "Piedras Negras",
                "Progreso",
                "Ramos Arizpe",
                "Sabinas",
                "Sacramento",
                "Saltillo",
                "San Buenaventura",
                "San Juan de Sabinas",
                "San Pedro",
                "Sierra Mojada",
                "Torre??n",
                "Viesca",
                "Villa Uni??n",
                "Zaragoza"
            ],
            "Colima": [
                "Armer??a",
                "Colima",
                "Comala",
                "Coquimatl??n",
                "Cuauht??moc",
                "Ixtlahuac??n",
                "Manzanillo",
                "Minatitl??n",
                "Tecom??n",
                "Villa de ??lvarez"
            ],
            "Chiapas": [
                "Acacoyagua",
                "Acala",
                "Acapetahua",
                "Altamirano",
                "Amat??n",
                "Amatenango de la Frontera",
                "Amatenango del Valle",
                "Angel Albino Corzo",
                "Arriaga",
                "Bejucal de Ocampo",
                "Bella Vista",
                "Berrioz??bal",
                "Bochil",
                "El Bosque",
                "Cacahoat??n",
                "Catazaj??",
                "Cintalapa",
                "Coapilla",
                "Comit??n de Dom??nguez",
                "La Concordia",
                "Copainal??",
                "Chalchihuit??n",
                "Chamula",
                "Chanal",
                "Chapultenango",
                "Chenalh??",
                "Chiapa de Corzo",
                "Chiapilla",
                "Chicoas??n",
                "Chicomuselo",
                "Chil??n",
                "Escuintla",
                "Francisco Le??n",
                "Frontera Comalapa",
                "Frontera Hidalgo",
                "La Grandeza",
                "Huehuet??n",
                "Huixt??n",
                "Huitiup??n",
                "Huixtla",
                "La Independencia",
                "Ixhuat??n",
                "Ixtacomit??n",
                "Ixtapa",
                "Ixtapangajoya",
                "Jiquipilas",
                "Jitotol",
                "Ju??rez",
                "Larr??inzar",
                "La Libertad",
                "Mapastepec",
                "Las Margaritas",
                "Mazapa de Madero",
                "Mazat??n",
                "Metapa",
                "Mitontic",
                "Motozintla",
                "Nicol??s Ru??z",
                "Ocosingo",
                "Ocotepec",
                "Ocozocoautla de Espinosa",
                "Ostuac??n",
                "Osumacinta",
                "Oxchuc",
                "Palenque",
                "Pantelh??",
                "Pantepec",
                "Pichucalco",
                "Pijijiapan",
                "El Porvenir",
                "Villa Comaltitl??n",
                "Pueblo Nuevo Solistahuac??n",
                "Ray??n",
                "Reforma",
                "Las Rosas",
                "Sabanilla",
                "Salto de Agua",
                "San Crist??bal de las Casas",
                "San Fernando",
                "Siltepec",
                "Simojovel",
                "Sital??",
                "Socoltenango",
                "Solosuchiapa",
                "Soyal??",
                "Suchiapa",
                "Suchiate",
                "Sunuapa",
                "Tapachula",
                "Tapalapa",
                "Tapilula",
                "Tecpat??n",
                "Tenejapa",
                "Teopisca",
                "Tila",
                "Tonal??",
                "Totolapa",
                "La Trinitaria",
                "Tumbal??",
                "Tuxtla Guti??rrez",
                "Tuxtla Chico",
                "Tuzant??n",
                "Tzimol",
                "Uni??n Ju??rez",
                "Venustiano Carranza",
                "Villa Corzo",
                "Villaflores",
                "Yajal??n",
                "San Lucas",
                "Zinacant??n",
                "San Juan Cancuc",
                "Aldama",
                "Benem??rito de las Am??ricas",
                "Maravilla Tenejapa",
                "Marqu??s de Comillas",
                "Montecristo de Guerrero",
                "San Andr??s Duraznal",
                "Santiago el Pinar",
                "Capit??n Luis ??ngel Vidal",
                "Rinc??n Chamula San Pedro",
                "El Parral",
                "Emiliano Zapata",
                "Mezcalapa"
            ],
            "Chihuahua": [
                "Ahumada",
                "Aldama",
                "Allende",
                "Aquiles Serd??n",
                "Ascensi??n",
                "Bach??niva",
                "Balleza",
                "Batopilas de Manuel G??mez Mor??n",
                "Bocoyna",
                "Buenaventura",
                "Camargo",
                "Carich??",
                "Casas Grandes",
                "Coronado",
                "Coyame del Sotol",
                "La Cruz",
                "Cuauht??moc",
                "Cusihuiriachi",
                "Chihuahua",
                "Ch??nipas",
                "Delicias",
                "Dr. Belisario Dom??nguez",
                "Galeana",
                "Santa Isabel",
                "G??mez Far??as",
                "Gran Morelos",
                "Guachochi",
                "Guadalupe",
                "Guadalupe y Calvo",
                "Guazapares",
                "Guerrero",
                "Hidalgo del Parral",
                "Huejotit??n",
                "Ignacio Zaragoza",
                "Janos",
                "Jim??nez",
                "Ju??rez",
                "Julimes",
                "L??pez",
                "Madera",
                "Maguarichi",
                "Manuel Benavides",
                "Matach??",
                "Matamoros",
                "Meoqui",
                "Morelos",
                "Moris",
                "Namiquipa",
                "Nonoava",
                "Nuevo Casas Grandes",
                "Ocampo",
                "Ojinaga",
                "Praxedis G. Guerrero",
                "Riva Palacio",
                "Rosales",
                "Rosario",
                "San Francisco de Borja",
                "San Francisco de Conchos",
                "San Francisco del Oro",
                "Santa B??rbara",
                "Satev??",
                "Saucillo",
                "Tem??sachic",
                "El Tule",
                "Urique",
                "Uruachi",
                "Valle de Zaragoza"
            ],
            "Ciudad de M??xico": [
                "Azcapotzalco",
                "Coyoac??n",
                "Cuajimalpa de Morelos",
                "Gustavo A. Madero",
                "Iztacalco",
                "Iztapalapa",
                "La Magdalena Contreras",
                "Milpa Alta",
                "??lvaro Obreg??n",
                "Tl??huac",
                "Tlalpan",
                "Xochimilco",
                "Benito Ju??rez",
                "Cuauht??moc",
                "Miguel Hidalgo",
                "Venustiano Carranza"
            ],
            "Durango": [
                "Canatl??n",
                "Canelas",
                "Coneto de Comonfort",
                "Cuencam??",
                "Durango",
                "General Sim??n Bol??var",
                "G??mez Palacio",
                "Guadalupe Victoria",
                "Guanacev??",
                "Hidalgo",
                "Ind??",
                "Lerdo",
                "Mapim??",
                "Mezquital",
                "Nazas",
                "Nombre de Dios",
                "Ocampo",
                "El Oro",
                "Ot??ez",
                "P??nuco de Coronado",
                "Pe????n Blanco",
                "Poanas",
                "Pueblo Nuevo",
                "Rodeo",
                "San Bernardo",
                "San Dimas",
                "San Juan de Guadalupe",
                "San Juan del R??o",
                "San Luis del Cordero",
                "San Pedro del Gallo",
                "Santa Clara",
                "Santiago Papasquiaro",
                "S??chil",
                "Tamazula",
                "Tepehuanes",
                "Tlahualilo",
                "Topia",
                "Vicente Guerrero",
                "Nuevo Ideal"
            ],
            "Guanajuato": [
                "Abasolo",
                "Ac??mbaro",
                "San Miguel de Allende",
                "Apaseo el Alto",
                "Apaseo el Grande",
                "Atarjea",
                "Celaya",
                "Manuel Doblado",
                "Comonfort",
                "Coroneo",
                "Cortazar",
                "Cuer??maro",
                "Doctor Mora",
                "Dolores Hidalgo Cuna de la Independencia Nacional",
                "Guanajuato",
                "Huan??maro",
                "Irapuato",
                "Jaral del Progreso",
                "Jer??cuaro",
                "Le??n",
                "Morole??n",
                "Ocampo",
                "P??njamo",
                "Pueblo Nuevo",
                "Pur??sima del Rinc??n",
                "Romita",
                "Salamanca",
                "Salvatierra",
                "San Diego de la Uni??n",
                "San Felipe",
                "San Francisco del Rinc??n",
                "San Jos?? Iturbide",
                "San Luis de la Paz",
                "Santa Catarina",
                "Santa Cruz de Juventino Rosas",
                "Santiago Maravat??o",
                "Silao de la Victoria",
                "Tarandacuao",
                "Tarimoro",
                "Tierra Blanca",
                "Uriangato",
                "Valle de Santiago",
                "Victoria",
                "Villagr??n",
                "Xich??",
                "Yuriria"
            ],
            "Guerrero": [
                "Acapulco de Ju??rez",
                "Ahuacuotzingo",
                "Ajuchitl??n del Progreso",
                "Alcozauca de Guerrero",
                "Alpoyeca",
                "Apaxtla",
                "Arcelia",
                "Atenango del R??o",
                "Atlamajalcingo del Monte",
                "Atlixtac",
                "Atoyac de ??lvarez",
                "Ayutla de los Libres",
                "Azoy??",
                "Benito Ju??rez",
                "Buenavista de Cu??llar",
                "Coahuayutla de Jos?? Mar??a Izazaga",
                "Cocula",
                "Copala",
                "Copalillo",
                "Copanatoyac",
                "Coyuca de Ben??tez",
                "Coyuca de Catal??n",
                "Cuajinicuilapa",
                "Cual??c",
                "Cuautepec",
                "Cuetzala del Progreso",
                "Cutzamala de Pinz??n",
                "Chilapa de ??lvarez",
                "Chilpancingo de los Bravo",
                "Florencio Villarreal",
                "General Canuto A. Neri",
                "General Heliodoro Castillo",
                "Huamuxtitl??n",
                "Huitzuco de los Figueroa",
                "Iguala de la Independencia",
                "Igualapa",
                "Ixcateopan de Cuauht??moc",
                "Zihuatanejo de Azueta",
                "Juan R. Escudero",
                "Leonardo Bravo",
                "Malinaltepec",
                "M??rtir de Cuilapan",
                "Metlat??noc",
                "Mochitl??n",
                "Olinal??",
                "Ometepec",
                "Pedro Ascencio Alquisiras",
                "Petatl??n",
                "Pilcaya",
                "Pungarabato",
                "Quechultenango",
                "San Luis Acatl??n",
                "San Marcos",
                "San Miguel Totolapan",
                "Taxco de Alarc??n",
                "Tecoanapa",
                "T??cpan de Galeana",
                "Teloloapan",
                "Tepecoacuilco de Trujano",
                "Tetipac",
                "Tixtla de Guerrero",
                "Tlacoachistlahuaca",
                "Tlacoapa",
                "Tlalchapa",
                "Tlalixtaquilla de Maldonado",
                "Tlapa de Comonfort",
                "Tlapehuala",
                "La Uni??n de Isidoro Montes de Oca",
                "Xalpatl??huac",
                "Xochihuehuetl??n",
                "Xochistlahuaca",
                "Zapotitl??n Tablas",
                "Zir??ndaro",
                "Zitlala",
                "Eduardo Neri",
                "Acatepec",
                "Marquelia",
                "Cochoapa el Grande",
                "Jos?? Joaqu??n de Herrera",
                "Juchit??n",
                "Iliatenco"
            ],
            "Hidalgo": [
                "Acatl??n",
                "Acaxochitl??n",
                "Actopan",
                "Agua Blanca de Iturbide",
                "Ajacuba",
                "Alfajayucan",
                "Almoloya",
                "Apan",
                "El Arenal",
                "Atitalaquia",
                "Atlapexco",
                "Atotonilco el Grande",
                "Atotonilco de Tula",
                "Calnali",
                "Cardonal",
                "Cuautepec de Hinojosa",
                "Chapantongo",
                "Chapulhuac??n",
                "Chilcuautla",
                "Eloxochitl??n",
                "Emiliano Zapata",
                "Epazoyucan",
                "Francisco I. Madero",
                "Huasca de Ocampo",
                "Huautla",
                "Huazalingo",
                "Huehuetla",
                "Huejutla de Reyes",
                "Huichapan",
                "Ixmiquilpan",
                "Jacala de Ledezma",
                "Jaltoc??n",
                "Ju??rez Hidalgo",
                "Lolotla",
                "Metepec",
                "San Agust??n Metzquititl??n",
                "Metztitl??n",
                "Mineral del Chico",
                "Mineral del Monte",
                "La Misi??n",
                "Mixquiahuala de Ju??rez",
                "Molango de Escamilla",
                "Nicol??s Flores",
                "Nopala de Villagr??n",
                "Omitl??n de Ju??rez",
                "San Felipe Orizatl??n",
                "Pacula",
                "Pachuca de Soto",
                "Pisaflores",
                "Progreso de Obreg??n",
                "Mineral de la Reforma",
                "San Agust??n Tlaxiaca",
                "San Bartolo Tutotepec",
                "San Salvador",
                "Santiago de Anaya",
                "Santiago Tulantepec de Lugo Guerrero",
                "Singuilucan",
                "Tasquillo",
                "Tecozautla",
                "Tenango de Doria",
                "Tepeapulco",
                "Tepehuac??n de Guerrero",
                "Tepeji del R??o de Ocampo",
                "Tepetitl??n",
                "Tetepango",
                "Villa de Tezontepec",
                "Tezontepec de Aldama",
                "Tianguistengo",
                "Tizayuca",
                "Tlahuelilpan",
                "Tlahuiltepa",
                "Tlanalapa",
                "Tlanchinol",
                "Tlaxcoapan",
                "Tolcayuca",
                "Tula de Allende",
                "Tulancingo de Bravo",
                "Xochiatipan",
                "Xochicoatl??n",
                "Yahualica",
                "Zacualtip??n de ??ngeles",
                "Zapotl??n de Ju??rez",
                "Zempoala",
                "Zimap??n"
            ],
            "Jalisco": [
                "Acatic",
                "Acatl??n de Ju??rez",
                "Ahualulco de Mercado",
                "Amacueca",
                "Amatit??n",
                "Ameca",
                "San Juanito de Escobedo",
                "Arandas",
                "El Arenal",
                "Atemajac de Brizuela",
                "Atengo",
                "Atenguillo",
                "Atotonilco el Alto",
                "Atoyac",
                "Autl??n de Navarro",
                "Ayotl??n",
                "Ayutla",
                "La Barca",
                "Bola??os",
                "Cabo Corrientes",
                "Casimiro Castillo",
                "Cihuatl??n",
                "Zapotl??n el Grande",
                "Cocula",
                "Colotl??n",
                "Concepci??n de Buenos Aires",
                "Cuautitl??n de Garc??a Barrag??n",
                "Cuautla",
                "Cuqu??o",
                "Chapala",
                "Chimaltit??n",
                "Chiquilistl??n",
                "Degollado",
                "Ejutla",
                "Encarnaci??n de D??az",
                "Etzatl??n",
                "El Grullo",
                "Guachinango",
                "Guadalajara",
                "Hostotipaquillo",
                "Huej??car",
                "Huejuquilla el Alto",
                "La Huerta",
                "Ixtlahuac??n de los Membrillos",
                "Ixtlahuac??n del R??o",
                "Jalostotitl??n",
                "Jamay",
                "Jes??s Mar??a",
                "Jilotl??n de los Dolores",
                "Jocotepec",
                "Juanacatl??n",
                "Juchitl??n",
                "Lagos de Moreno",
                "El Lim??n",
                "Magdalena",
                "Santa Mar??a del Oro",
                "La Manzanilla de la Paz",
                "Mascota",
                "Mazamitla",
                "Mexticac??n",
                "Mezquitic",
                "Mixtl??n",
                "Ocotl??n",
                "Ojuelos de Jalisco",
                "Pihuamo",
                "Poncitl??n",
                "Puerto Vallarta",
                "Villa Purificaci??n",
                "Quitupan",
                "El Salto",
                "San Crist??bal de la Barranca",
                "San Diego de Alejandr??a",
                "San Juan de los Lagos",
                "San Juli??n",
                "San Marcos",
                "San Mart??n de Bola??os",
                "San Mart??n Hidalgo",
                "San Miguel el Alto",
                "G??mez Far??as",
                "San Sebasti??n del Oeste",
                "Santa Mar??a de los ??ngeles",
                "Sayula",
                "Tala",
                "Talpa de Allende",
                "Tamazula de Gordiano",
                "Tapalpa",
                "Tecalitl??n",
                "Tecolotl??n",
                "Techaluta de Montenegro",
                "Tenamaxtl??n",
                "Teocaltiche",
                "Teocuitatl??n de Corona",
                "Tepatitl??n de Morelos",
                "Tequila",
                "Teuchitl??n",
                "Tizap??n el Alto",
                "Tlajomulco de Z????iga",
                "San Pedro Tlaquepaque",
                "Tolim??n",
                "Tomatl??n",
                "Tonal??",
                "Tonaya",
                "Tonila",
                "Totatiche",
                "Tototl??n",
                "Tuxcacuesco",
                "Tuxcueca",
                "Tuxpan",
                "Uni??n de San Antonio",
                "Uni??n de Tula",
                "Valle de Guadalupe",
                "Valle de Ju??rez",
                "San Gabriel",
                "Villa Corona",
                "Villa Guerrero",
                "Villa Hidalgo",
                "Ca??adas de Obreg??n",
                "Yahualica de Gonz??lez Gallo",
                "Zacoalco de Torres",
                "Zapopan",
                "Zapotiltic",
                "Zapotitl??n de Vadillo",
                "Zapotl??n del Rey",
                "Zapotlanejo",
                "San Ignacio Cerro Gordo"
            ],
            "M??xico": [
                "Acambay de Ru??z Casta??eda",
                "Acolman",
                "Aculco",
                "Almoloya de Alquisiras",
                "Almoloya de Ju??rez",
                "Almoloya del R??o",
                "Amanalco",
                "Amatepec",
                "Amecameca",
                "Apaxco",
                "Atenco",
                "Atizap??n",
                "Atizap??n de Zaragoza",
                "Atlacomulco",
                "Atlautla",
                "Axapusco",
                "Ayapango",
                "Calimaya",
                "Capulhuac",
                "Coacalco de Berrioz??bal",
                "Coatepec Harinas",
                "Cocotitl??n",
                "Coyotepec",
                "Cuautitl??n",
                "Chalco",
                "Chapa de Mota",
                "Chapultepec",
                "Chiautla",
                "Chicoloapan",
                "Chiconcuac",
                "Chimalhuac??n",
                "Donato Guerra",
                "Ecatepec de Morelos",
                "Ecatzingo",
                "Huehuetoca",
                "Hueypoxtla",
                "Huixquilucan",
                "Isidro Fabela",
                "Ixtapaluca",
                "Ixtapan de la Sal",
                "Ixtapan del Oro",
                "Ixtlahuaca",
                "Xalatlaco",
                "Jaltenco",
                "Jilotepec",
                "Jilotzingo",
                "Jiquipilco",
                "Jocotitl??n",
                "Joquicingo",
                "Juchitepec",
                "Lerma",
                "Malinalco",
                "Melchor Ocampo",
                "Metepec",
                "Mexicaltzingo",
                "Morelos",
                "Naucalpan de Ju??rez",
                "Nezahualc??yotl",
                "Nextlalpan",
                "Nicol??s Romero",
                "Nopaltepec",
                "Ocoyoacac",
                "Ocuilan",
                "El Oro",
                "Otumba",
                "Otzoloapan",
                "Otzolotepec",
                "Ozumba",
                "Papalotla",
                "La Paz",
                "Polotitl??n",
                "Ray??n",
                "San Antonio la Isla",
                "San Felipe del Progreso",
                "San Mart??n de las Pir??mides",
                "San Mateo Atenco",
                "San Sim??n de Guerrero",
                "Santo Tom??s",
                "Soyaniquilpan de Ju??rez",
                "Sultepec",
                "Tec??mac",
                "Tejupilco",
                "Temamatla",
                "Temascalapa",
                "Temascalcingo",
                "Temascaltepec",
                "Temoaya",
                "Tenancingo",
                "Tenango del Aire",
                "Tenango del Valle",
                "Teoloyucan",
                "Teotihuac??n",
                "Tepetlaoxtoc",
                "Tepetlixpa",
                "Tepotzotl??n",
                "Tequixquiac",
                "Texcaltitl??n",
                "Texcalyacac",
                "Texcoco",
                "Tezoyuca",
                "Tianguistenco",
                "Timilpan",
                "Tlalmanalco",
                "Tlalnepantla de Baz",
                "Tlatlaya",
                "Toluca",
                "Tonatico",
                "Tultepec",
                "Tultitl??n",
                "Valle de Bravo",
                "Villa de Allende",
                "Villa del Carb??n",
                "Villa Guerrero",
                "Villa Victoria",
                "Xonacatl??n",
                "Zacazonapan",
                "Zacualpan",
                "Zinacantepec",
                "Zumpahuac??n",
                "Zumpango",
                "Cuautitl??n Izcalli",
                "Valle de Chalco Solidaridad",
                "Luvianos",
                "San Jos?? del Rinc??n",
                "Tonanitla"
            ],
            "Michoac??n de Ocampo": [
                "Acuitzio",
                "Aguililla",
                "??lvaro Obreg??n",
                "Angamacutiro",
                "Angangueo",
                "Apatzing??n",
                "Aporo",
                "Aquila",
                "Ario",
                "Arteaga",
                "Brise??as",
                "Buenavista",
                "Car??cuaro",
                "Coahuayana",
                "Coalcom??n de V??zquez Pallares",
                "Coeneo",
                "Contepec",
                "Cop??ndaro",
                "Cotija",
                "Cuitzeo",
                "Charapan",
                "Charo",
                "Chavinda",
                "Cher??n",
                "Chilchota",
                "Chinicuila",
                "Chuc??ndiro",
                "Churintzio",
                "Churumuco",
                "Ecuandureo",
                "Epitacio Huerta",
                "Erongar??cuaro",
                "Gabriel Zamora",
                "Hidalgo",
                "La Huacana",
                "Huandacareo",
                "Huaniqueo",
                "Huetamo",
                "Huiramba",
                "Indaparapeo",
                "Irimbo",
                "Ixtl??n",
                "Jacona",
                "Jim??nez",
                "Jiquilpan",
                "Ju??rez",
                "Jungapeo",
                "Lagunillas",
                "Madero",
                "Maravat??o",
                "Marcos Castellanos",
                "L??zaro C??rdenas",
                "Morelia",
                "Morelos",
                "M??gica",
                "Nahuatzen",
                "Nocup??taro",
                "Nuevo Parangaricutiro",
                "Nuevo Urecho",
                "Numar??n",
                "Ocampo",
                "Pajacuar??n",
                "Panind??cuaro",
                "Par??cuaro",
                "Paracho",
                "P??tzcuaro",
                "Penjamillo",
                "Perib??n",
                "La Piedad",
                "Pur??pero",
                "Puru??ndiro",
                "Quer??ndaro",
                "Quiroga",
                "Cojumatl??n de R??gules",
                "Los Reyes",
                "Sahuayo",
                "San Lucas",
                "Santa Ana Maya",
                "Salvador Escalante",
                "Senguio",
                "Susupuato",
                "Tac??mbaro",
                "Tanc??taro",
                "Tangamandapio",
                "Tanganc??cuaro",
                "Tanhuato",
                "Taretan",
                "Tar??mbaro",
                "Tepalcatepec",
                "Tingambato",
                "Ting??ind??n",
                "Tiquicheo de Nicol??s Romero",
                "Tlalpujahua",
                "Tlazazalca",
                "Tocumbo",
                "Tumbiscat??o",
                "Turicato",
                "Tuxpan",
                "Tuzantla",
                "Tzintzuntzan",
                "Tzitzio",
                "Uruapan",
                "Venustiano Carranza",
                "Villamar",
                "Vista Hermosa",
                "Yur??cuaro",
                "Zacapu",
                "Zamora",
                "Zin??paro",
                "Zinap??cuaro",
                "Ziracuaretiro",
                "Zit??cuaro",
                "Jos?? Sixto Verduzco"
            ],
            "Morelos": [
                "Amacuzac",
                "Atlatlahucan",
                "Axochiapan",
                "Ayala",
                "Coatl??n del R??o",
                "Cuautla",
                "Cuernavaca",
                "Emiliano Zapata",
                "Huitzilac",
                "Jantetelco",
                "Jiutepec",
                "Jojutla",
                "Jonacatepec de Leandro Valle",
                "Mazatepec",
                "Miacatl??n",
                "Ocuituco",
                "Puente de Ixtla",
                "Temixco",
                "Tepalcingo",
                "Tepoztl??n",
                "Tetecala",
                "Tetela del Volc??n",
                "Tlalnepantla",
                "Tlaltizap??n de Zapata",
                "Tlaquiltenango",
                "Tlayacapan",
                "Totolapan",
                "Xochitepec",
                "Yautepec",
                "Yecapixtla",
                "Zacatepec",
                "Zacualpan de Amilpas",
                "Temoac"
            ],
            "Nayarit": [
                "Acaponeta",
                "Ahuacatl??n",
                "Amatl??n de Ca??as",
                "Compostela",
                "Huajicori",
                "Ixtl??n del R??o",
                "Jala",
                "Xalisco",
                "Del Nayar",
                "Rosamorada",
                "Ru??z",
                "San Blas",
                "San Pedro Lagunillas",
                "Santa Mar??a del Oro",
                "Santiago Ixcuintla",
                "Tecuala",
                "Tepic",
                "Tuxpan",
                "La Yesca",
                "Bah??a de Banderas"
            ],
            "Nuevo Le??n": [
                "Abasolo",
                "Agualeguas",
                "Los Aldamas",
                "Allende",
                "An??huac",
                "Apodaca",
                "Aramberri",
                "Bustamante",
                "Cadereyta Jim??nez",
                "El Carmen",
                "Cerralvo",
                "Ci??nega de Flores",
                "China",
                "Doctor Arroyo",
                "Doctor Coss",
                "Doctor Gonz??lez",
                "Galeana",
                "Garc??a",
                "San Pedro Garza Garc??a",
                "General Bravo",
                "General Escobedo",
                "General Ter??n",
                "General Trevi??o",
                "General Zaragoza",
                "General Zuazua",
                "Guadalupe",
                "Los Herreras",
                "Higueras",
                "Hualahuises",
                "Iturbide",
                "Ju??rez",
                "Lampazos de Naranjo",
                "Linares",
                "Mar??n",
                "Melchor Ocampo",
                "Mier y Noriega",
                "Mina",
                "Montemorelos",
                "Monterrey",
                "Par??s",
                "Pesquer??a",
                "Los Ramones",
                "Rayones",
                "Sabinas Hidalgo",
                "Salinas Victoria",
                "San Nicol??s de los Garza",
                "Hidalgo",
                "Santa Catarina",
                "Santiago",
                "Vallecillo",
                "Villaldama"
            ],
            "Oaxaca": [
                "Abejones",
                "Acatl??n de P??rez Figueroa",
                "Asunci??n Cacalotepec",
                "Asunci??n Cuyotepeji",
                "Asunci??n Ixtaltepec",
                "Asunci??n Nochixtl??n",
                "Asunci??n Ocotl??n",
                "Asunci??n Tlacolulita",
                "Ayotzintepec",
                "El Barrio de la Soledad",
                "Calihual??",
                "Candelaria Loxicha",
                "Ci??nega de Zimatl??n",
                "Ciudad Ixtepec",
                "Coatecas Altas",
                "Coicoy??n de las Flores",
                "La Compa????a",
                "Concepci??n Buenavista",
                "Concepci??n P??palo",
                "Constancia del Rosario",
                "Cosolapa",
                "Cosoltepec",
                "Cuil??pam de Guerrero",
                "Cuyamecalco Villa de Zaragoza",
                "Chahuites",
                "Chalcatongo de Hidalgo",
                "Chiquihuitl??n de Benito Ju??rez",
                "Heroica Ciudad de Ejutla de Crespo",
                "Eloxochitl??n de Flores Mag??n",
                "El Espinal",
                "Tamazul??pam del Esp??ritu Santo",
                "Fresnillo de Trujano",
                "Guadalupe Etla",
                "Guadalupe de Ram??rez",
                "Guelatao de Ju??rez",
                "Guevea de Humboldt",
                "Mesones Hidalgo",
                "Villa Hidalgo",
                "Heroica Ciudad de Huajuapan de Le??n",
                "Huautepec",
                "Huautla de Jim??nez",
                "Ixtl??n de Ju??rez",
                "Heroica Ciudad de Juchit??n de Zaragoza",
                "Loma Bonita",
                "Magdalena Apasco",
                "Magdalena Jaltepec",
                "Santa Magdalena Jicotl??n",
                "Magdalena Mixtepec",
                "Magdalena Ocotl??n",
                "Magdalena Pe??asco",
                "Magdalena Teitipac",
                "Magdalena Tequisistl??n",
                "Magdalena Tlacotepec",
                "Magdalena Zahuatl??n",
                "Mariscala de Ju??rez",
                "M??rtires de Tacubaya",
                "Mat??as Romero Avenda??o",
                "Mazatl??n Villa de Flores",
                "Miahuatl??n de Porfirio D??az",
                "Mixistl??n de la Reforma",
                "Monjas",
                "Natividad",
                "Nazareno Etla",
                "Nejapa de Madero",
                "Ixpantepec Nieves",
                "Santiago Niltepec",
                "Oaxaca de Ju??rez",
                "Ocotl??n de Morelos",
                "La Pe",
                "Pinotepa de Don Luis",
                "Pluma Hidalgo",
                "San Jos?? del Progreso",
                "Putla Villa de Guerrero",
                "Santa Catarina Quioquitani",
                "Reforma de Pineda",
                "La Reforma",
                "Reyes Etla",
                "Rojas de Cuauht??moc",
                "Salina Cruz",
                "San Agust??n Amatengo",
                "San Agust??n Atenango",
                "San Agust??n Chayuco",
                "San Agust??n de las Juntas",
                "San Agust??n Etla",
                "San Agust??n Loxicha",
                "San Agust??n Tlacotepec",
                "San Agust??n Yatareni",
                "San Andr??s Cabecera Nueva",
                "San Andr??s Dinicuiti",
                "San Andr??s Huaxpaltepec",
                "San Andr??s Huay??pam",
                "San Andr??s Ixtlahuaca",
                "San Andr??s Lagunas",
                "San Andr??s Nuxi??o",
                "San Andr??s Paxtl??n",
                "San Andr??s Sinaxtla",
                "San Andr??s Solaga",
                "San Andr??s Teotil??lpam",
                "San Andr??s Tepetlapa",
                "San Andr??s Ya??",
                "San Andr??s Zabache",
                "San Andr??s Zautla",
                "San Antonino Castillo Velasco",
                "San Antonino el Alto",
                "San Antonino Monte Verde",
                "San Antonio Acutla",
                "San Antonio de la Cal",
                "San Antonio Huitepec",
                "San Antonio Nanahuat??pam",
                "San Antonio Sinicahua",
                "San Antonio Tepetlapa",
                "San Baltazar Chichic??pam",
                "San Baltazar Loxicha",
                "San Baltazar Yatzachi el Bajo",
                "San Bartolo Coyotepec",
                "San Bartolom?? Ayautla",
                "San Bartolom?? Loxicha",
                "San Bartolom?? Quialana",
                "San Bartolom?? Yucua??e",
                "San Bartolom?? Zoogocho",
                "San Bartolo Soyaltepec",
                "San Bartolo Yautepec",
                "San Bernardo Mixtepec",
                "San Blas Atempa",
                "San Carlos Yautepec",
                "San Crist??bal Amatl??n",
                "San Crist??bal Amoltepec",
                "San Crist??bal Lachirioag",
                "San Crist??bal Suchixtlahuaca",
                "San Dionisio del Mar",
                "San Dionisio Ocotepec",
                "San Dionisio Ocotl??n",
                "San Esteban Atatlahuca",
                "San Felipe Jalapa de D??az",
                "San Felipe Tejal??pam",
                "San Felipe Usila",
                "San Francisco Cahuacu??",
                "San Francisco Cajonos",
                "San Francisco Chapulapa",
                "San Francisco Chind??a",
                "San Francisco del Mar",
                "San Francisco Huehuetl??n",
                "San Francisco Ixhuat??n",
                "San Francisco Jaltepetongo",
                "San Francisco Lachigol??",
                "San Francisco Logueche",
                "San Francisco Nuxa??o",
                "San Francisco Ozolotepec",
                "San Francisco Sola",
                "San Francisco Telixtlahuaca",
                "San Francisco Teopan",
                "San Francisco Tlapancingo",
                "San Gabriel Mixtepec",
                "San Ildefonso Amatl??n",
                "San Ildefonso Sola",
                "San Ildefonso Villa Alta",
                "San Jacinto Amilpas",
                "San Jacinto Tlacotepec",
                "San Jer??nimo Coatl??n",
                "San Jer??nimo Silacayoapilla",
                "San Jer??nimo Sosola",
                "San Jer??nimo Taviche",
                "San Jer??nimo Tec??atl",
                "San Jorge Nuchita",
                "San Jos?? Ayuquila",
                "San Jos?? Chiltepec",
                "San Jos?? del Pe??asco",
                "San Jos?? Estancia Grande",
                "San Jos?? Independencia",
                "San Jos?? Lachiguiri",
                "San Jos?? Tenango",
                "San Juan Achiutla",
                "San Juan Atepec",
                "??nimas Trujano",
                "San Juan Bautista Atatlahuca",
                "San Juan Bautista Coixtlahuaca",
                "San Juan Bautista Cuicatl??n",
                "San Juan Bautista Guelache",
                "San Juan Bautista Jayacatl??n",
                "San Juan Bautista Lo de Soto",
                "San Juan Bautista Suchitepec",
                "San Juan Bautista Tlacoatzintepec",
                "San Juan Bautista Tlachichilco",
                "San Juan Bautista Tuxtepec",
                "San Juan Cacahuatepec",
                "San Juan Cieneguilla",
                "San Juan Coatz??spam",
                "San Juan Colorado",
                "San Juan Comaltepec",
                "San Juan Cotzoc??n",
                "San Juan Chicomez??chil",
                "San Juan Chilateca",
                "San Juan del Estado",
                "San Juan del R??o",
                "San Juan Diuxi",
                "San Juan Evangelista Analco",
                "San Juan Guelav??a",
                "San Juan Guichicovi",
                "San Juan Ihualtepec",
                "San Juan Juquila Mixes",
                "San Juan Juquila Vijanos",
                "San Juan Lachao",
                "San Juan Lachigalla",
                "San Juan Lajarcia",
                "San Juan Lalana",
                "San Juan de los Cu??s",
                "San Juan Mazatl??n",
                "San Juan Mixtepec",
                "San Juan Mixtepec",
                "San Juan ??um??",
                "San Juan Ozolotepec",
                "San Juan Petlapa",
                "San Juan Quiahije",
                "San Juan Quiotepec",
                "San Juan Sayultepec",
                "San Juan Taba??",
                "San Juan Tamazola",
                "San Juan Teita",
                "San Juan Teitipac",
                "San Juan Tepeuxila",
                "San Juan Teposcolula",
                "San Juan Yae??",
                "San Juan Yatzona",
                "San Juan Yucuita",
                "San Lorenzo",
                "San Lorenzo Albarradas",
                "San Lorenzo Cacaotepec",
                "San Lorenzo Cuaunecuiltitla",
                "San Lorenzo Texmel??can",
                "San Lorenzo Victoria",
                "San Lucas Camotl??n",
                "San Lucas Ojitl??n",
                "San Lucas Quiavin??",
                "San Lucas Zoqui??pam",
                "San Luis Amatl??n",
                "San Marcial Ozolotepec",
                "San Marcos Arteaga",
                "San Mart??n de los Cansecos",
                "San Mart??n Huamel??lpam",
                "San Mart??n Itunyoso",
                "San Mart??n Lachil??",
                "San Mart??n Peras",
                "San Mart??n Tilcajete",
                "San Mart??n Toxpalan",
                "San Mart??n Zacatepec",
                "San Mateo Cajonos",
                "Capul??lpam de M??ndez",
                "San Mateo del Mar",
                "San Mateo Yoloxochitl??n",
                "San Mateo Etlatongo",
                "San Mateo Nej??pam",
                "San Mateo Pe??asco",
                "San Mateo Pi??as",
                "San Mateo R??o Hondo",
                "San Mateo Sindihui",
                "San Mateo Tlapiltepec",
                "San Melchor Betaza",
                "San Miguel Achiutla",
                "San Miguel Ahuehuetitl??n",
                "San Miguel Alo??pam",
                "San Miguel Amatitl??n",
                "San Miguel Amatl??n",
                "San Miguel Coatl??n",
                "San Miguel Chicahua",
                "San Miguel Chimalapa",
                "San Miguel del Puerto",
                "San Miguel del R??o",
                "San Miguel Ejutla",
                "San Miguel el Grande",
                "San Miguel Huautla",
                "San Miguel Mixtepec",
                "San Miguel Panixtlahuaca",
                "San Miguel Peras",
                "San Miguel Piedras",
                "San Miguel Quetzaltepec",
                "San Miguel Santa Flor",
                "Villa Sola de Vega",
                "San Miguel Soyaltepec",
                "San Miguel Suchixtepec",
                "Villa Talea de Castro",
                "San Miguel Tecomatl??n",
                "San Miguel Tenango",
                "San Miguel Tequixtepec",
                "San Miguel Tilqui??pam",
                "San Miguel Tlacamama",
                "San Miguel Tlacotepec",
                "San Miguel Tulancingo",
                "San Miguel Yotao",
                "San Nicol??s",
                "San Nicol??s Hidalgo",
                "San Pablo Coatl??n",
                "San Pablo Cuatro Venados",
                "San Pablo Etla",
                "San Pablo Huitzo",
                "San Pablo Huixtepec",
                "San Pablo Macuiltianguis",
                "San Pablo Tijaltepec",
                "San Pablo Villa de Mitla",
                "San Pablo Yaganiza",
                "San Pedro Amuzgos",
                "San Pedro Ap??stol",
                "San Pedro Atoyac",
                "San Pedro Cajonos",
                "San Pedro Coxcaltepec C??ntaros",
                "San Pedro Comitancillo",
                "San Pedro el Alto",
                "San Pedro Huamelula",
                "San Pedro Huilotepec",
                "San Pedro Ixcatl??n",
                "San Pedro Ixtlahuaca",
                "San Pedro Jaltepetongo",
                "San Pedro Jicay??n",
                "San Pedro Jocotipac",
                "San Pedro Juchatengo",
                "San Pedro M??rtir",
                "San Pedro M??rtir Quiechapa",
                "San Pedro M??rtir Yucuxaco",
                "San Pedro Mixtepec",
                "San Pedro Mixtepec",
                "San Pedro Molinos",
                "San Pedro Nopala",
                "San Pedro Ocopetatillo",
                "San Pedro Ocotepec",
                "San Pedro Pochutla",
                "San Pedro Quiatoni",
                "San Pedro Sochi??pam",
                "San Pedro Tapanatepec",
                "San Pedro Taviche",
                "San Pedro Teozacoalco",
                "San Pedro Teutila",
                "San Pedro Tida??",
                "San Pedro Topiltepec",
                "San Pedro Totol??pam",
                "Villa de Tututepec",
                "San Pedro Yaneri",
                "San Pedro Y??lox",
                "San Pedro y San Pablo Ayutla",
                "Villa de Etla",
                "San Pedro y San Pablo Teposcolula",
                "San Pedro y San Pablo Tequixtepec",
                "San Pedro Yucunama",
                "San Raymundo Jalpan",
                "San Sebasti??n Abasolo",
                "San Sebasti??n Coatl??n",
                "San Sebasti??n Ixcapa",
                "San Sebasti??n Nicananduta",
                "San Sebasti??n R??o Hondo",
                "San Sebasti??n Tecomaxtlahuaca",
                "San Sebasti??n Teitipac",
                "San Sebasti??n Tutla",
                "San Sim??n Almolongas",
                "San Sim??n Zahuatl??n",
                "Santa Ana",
                "Santa Ana Ateixtlahuaca",
                "Santa Ana Cuauht??moc",
                "Santa Ana del Valle",
                "Santa Ana Tavela",
                "Santa Ana Tlapacoyan",
                "Santa Ana Yareni",
                "Santa Ana Zegache",
                "Santa Catalina Quier??",
                "Santa Catarina Cuixtla",
                "Santa Catarina Ixtepeji",
                "Santa Catarina Juquila",
                "Santa Catarina Lachatao",
                "Santa Catarina Loxicha",
                "Santa Catarina Mechoac??n",
                "Santa Catarina Minas",
                "Santa Catarina Quian??",
                "Santa Catarina Tayata",
                "Santa Catarina Ticu??",
                "Santa Catarina Yosonot??",
                "Santa Catarina Zapoquila",
                "Santa Cruz Acatepec",
                "Santa Cruz Amilpas",
                "Santa Cruz de Bravo",
                "Santa Cruz Itundujia",
                "Santa Cruz Mixtepec",
                "Santa Cruz Nundaco",
                "Santa Cruz Papalutla",
                "Santa Cruz Tacache de Mina",
                "Santa Cruz Tacahua",
                "Santa Cruz Tayata",
                "Santa Cruz Xitla",
                "Santa Cruz Xoxocotl??n",
                "Santa Cruz Zenzontepec",
                "Santa Gertrudis",
                "Santa In??s del Monte",
                "Santa In??s Yatzeche",
                "Santa Luc??a del Camino",
                "Santa Luc??a Miahuatl??n",
                "Santa Luc??a Monteverde",
                "Santa Luc??a Ocotl??n",
                "Santa Mar??a Alotepec",
                "Santa Mar??a Apazco",
                "Santa Mar??a la Asunci??n",
                "Heroica Ciudad de Tlaxiaco",
                "Ayoquezco de Aldama",
                "Santa Mar??a Atzompa",
                "Santa Mar??a Camotl??n",
                "Santa Mar??a Colotepec",
                "Santa Mar??a Cortijo",
                "Santa Mar??a Coyotepec",
                "Santa Mar??a Chacho??pam",
                "Villa de Chilapa de D??az",
                "Santa Mar??a Chilchotla",
                "Santa Mar??a Chimalapa",
                "Santa Mar??a del Rosario",
                "Santa Mar??a del Tule",
                "Santa Mar??a Ecatepec",
                "Santa Mar??a Guelac??",
                "Santa Mar??a Guienagati",
                "Santa Mar??a Huatulco",
                "Santa Mar??a Huazolotitl??n",
                "Santa Mar??a Ipalapa",
                "Santa Mar??a Ixcatl??n",
                "Santa Mar??a Jacatepec",
                "Santa Mar??a Jalapa del Marqu??s",
                "Santa Mar??a Jaltianguis",
                "Santa Mar??a Lachix??o",
                "Santa Mar??a Mixtequilla",
                "Santa Mar??a Nativitas",
                "Santa Mar??a Nduayaco",
                "Santa Mar??a Ozolotepec",
                "Santa Mar??a P??palo",
                "Santa Mar??a Pe??oles",
                "Santa Mar??a Petapa",
                "Santa Mar??a Quiegolani",
                "Santa Mar??a Sola",
                "Santa Mar??a Tataltepec",
                "Santa Mar??a Tecomavaca",
                "Santa Mar??a Temaxcalapa",
                "Santa Mar??a Temaxcaltepec",
                "Santa Mar??a Teopoxco",
                "Santa Mar??a Tepantlali",
                "Santa Mar??a Texcatitl??n",
                "Santa Mar??a Tlahuitoltepec",
                "Santa Mar??a Tlalixtac",
                "Santa Mar??a Tonameca",
                "Santa Mar??a Totolapilla",
                "Santa Mar??a Xadani",
                "Santa Mar??a Yalina",
                "Santa Mar??a Yaves??a",
                "Santa Mar??a Yolotepec",
                "Santa Mar??a Yosoy??a",
                "Santa Mar??a Yucuhiti",
                "Santa Mar??a Zacatepec",
                "Santa Mar??a Zaniza",
                "Santa Mar??a Zoquitl??n",
                "Santiago Amoltepec",
                "Santiago Apoala",
                "Santiago Ap??stol",
                "Santiago Astata",
                "Santiago Atitl??n",
                "Santiago Ayuquililla",
                "Santiago Cacaloxtepec",
                "Santiago Camotl??n",
                "Santiago Comaltepec",
                "Santiago Chazumba",
                "Santiago Cho??pam",
                "Santiago del R??o",
                "Santiago Huajolotitl??n",
                "Santiago Huauclilla",
                "Santiago Ihuitl??n Plumas",
                "Santiago Ixcuintepec",
                "Santiago Ixtayutla",
                "Santiago Jamiltepec",
                "Santiago Jocotepec",
                "Santiago Juxtlahuaca",
                "Santiago Lachiguiri",
                "Santiago Lalopa",
                "Santiago Laollaga",
                "Santiago Laxopa",
                "Santiago Llano Grande",
                "Santiago Matatl??n",
                "Santiago Miltepec",
                "Santiago Minas",
                "Santiago Nacaltepec",
                "Santiago Nejapilla",
                "Santiago Nundiche",
                "Santiago Nuyo??",
                "Santiago Pinotepa Nacional",
                "Santiago Suchilquitongo",
                "Santiago Tamazola",
                "Santiago Tapextla",
                "Villa Tej??pam de la Uni??n",
                "Santiago Tenango",
                "Santiago Tepetlapa",
                "Santiago Tetepec",
                "Santiago Texcalcingo",
                "Santiago Textitl??n",
                "Santiago Tilantongo",
                "Santiago Tillo",
                "Santiago Tlazoyaltepec",
                "Santiago Xanica",
                "Santiago Xiacu??",
                "Santiago Yaitepec",
                "Santiago Yaveo",
                "Santiago Yolom??catl",
                "Santiago Yosond??a",
                "Santiago Yucuyachi",
                "Santiago Zacatepec",
                "Santiago Zoochila",
                "Nuevo Zoqui??pam",
                "Santo Domingo Ingenio",
                "Santo Domingo Albarradas",
                "Santo Domingo Armenta",
                "Santo Domingo Chihuit??n",
                "Santo Domingo de Morelos",
                "Santo Domingo Ixcatl??n",
                "Santo Domingo Nuxa??",
                "Santo Domingo Ozolotepec",
                "Santo Domingo Petapa",
                "Santo Domingo Roayaga",
                "Santo Domingo Tehuantepec",
                "Santo Domingo Teojomulco",
                "Santo Domingo Tepuxtepec",
                "Santo Domingo Tlatay??pam",
                "Santo Domingo Tomaltepec",
                "Santo Domingo Tonal??",
                "Santo Domingo Tonaltepec",
                "Santo Domingo Xagac??a",
                "Santo Domingo Yanhuitl??n",
                "Santo Domingo Yodohino",
                "Santo Domingo Zanatepec",
                "Santos Reyes Nopala",
                "Santos Reyes P??palo",
                "Santos Reyes Tepejillo",
                "Santos Reyes Yucun??",
                "Santo Tom??s Jalieza",
                "Santo Tom??s Mazaltepec",
                "Santo Tom??s Ocotepec",
                "Santo Tom??s Tamazulapan",
                "San Vicente Coatl??n",
                "San Vicente Lachix??o",
                "San Vicente Nu????",
                "Silacayo??pam",
                "Sitio de Xitlapehua",
                "Soledad Etla",
                "Villa de Tamazul??pam del Progreso",
                "Tanetze de Zaragoza",
                "Taniche",
                "Tataltepec de Vald??s",
                "Teococuilco de Marcos P??rez",
                "Teotitl??n de Flores Mag??n",
                "Teotitl??n del Valle",
                "Teotongo",
                "Tepelmeme Villa de Morelos",
                "Heroica Villa Tezoatl??n de Segura y Luna, Cuna de la Independencia de Oaxaca",
                "San Jer??nimo Tlacochahuaya",
                "Tlacolula de Matamoros",
                "Tlacotepec Plumas",
                "Tlalixtac de Cabrera",
                "Totontepec Villa de Morelos",
                "Trinidad Zaachila",
                "La Trinidad Vista Hermosa",
                "Uni??n Hidalgo",
                "Valerio Trujano",
                "San Juan Bautista Valle Nacional",
                "Villa D??az Ordaz",
                "Yaxe",
                "Magdalena Yodocono de Porfirio D??az",
                "Yogana",
                "Yutanduchi de Guerrero",
                "Villa de Zaachila",
                "San Mateo Yucutindoo",
                "Zapotitl??n Lagunas",
                "Zapotitl??n Palmas",
                "Santa In??s de Zaragoza",
                "Zimatl??n de ??lvarez"
            ],
            "Puebla": [
                "Acajete",
                "Acateno",
                "Acatl??n",
                "Acatzingo",
                "Acteopan",
                "Ahuacatl??n",
                "Ahuatl??n",
                "Ahuazotepec",
                "Ahuehuetitla",
                "Ajalpan",
                "Albino Zertuche",
                "Aljojuca",
                "Altepexi",
                "Amixtl??n",
                "Amozoc",
                "Aquixtla",
                "Atempan",
                "Atexcal",
                "Atlixco",
                "Atoyatempan",
                "Atzala",
                "Atzitzihuac??n",
                "Atzitzintla",
                "Axutla",
                "Ayotoxco de Guerrero",
                "Calpan",
                "Caltepec",
                "Camocuautla",
                "Caxhuacan",
                "Coatepec",
                "Coatzingo",
                "Cohetzala",
                "Cohuecan",
                "Coronango",
                "Coxcatl??n",
                "Coyomeapan",
                "Coyotepec",
                "Cuapiaxtla de Madero",
                "Cuautempan",
                "Cuautinch??n",
                "Cuautlancingo",
                "Cuayuca de Andrade",
                "Cuetzalan del Progreso",
                "Cuyoaco",
                "Chalchicomula de Sesma",
                "Chapulco",
                "Chiautla",
                "Chiautzingo",
                "Chiconcuautla",
                "Chichiquila",
                "Chietla",
                "Chigmecatitl??n",
                "Chignahuapan",
                "Chignautla",
                "Chila",
                "Chila de la Sal",
                "Honey",
                "Chilchotla",
                "Chinantla",
                "Domingo Arenas",
                "Eloxochitl??n",
                "Epatl??n",
                "Esperanza",
                "Francisco Z. Mena",
                "General Felipe ??ngeles",
                "Guadalupe",
                "Guadalupe Victoria",
                "Hermenegildo Galeana",
                "Huaquechula",
                "Huatlatlauca",
                "Huauchinango",
                "Huehuetla",
                "Huehuetl??n el Chico",
                "Huejotzingo",
                "Hueyapan",
                "Hueytamalco",
                "Hueytlalpan",
                "Huitzilan de Serd??n",
                "Huitziltepec",
                "Atlequizayan",
                "Ixcamilpa de Guerrero",
                "Ixcaquixtla",
                "Ixtacamaxtitl??n",
                "Ixtepec",
                "Iz??car de Matamoros",
                "Jalpan",
                "Jolalpan",
                "Jonotla",
                "Jopala",
                "Juan C. Bonilla",
                "Juan Galindo",
                "Juan N. M??ndez",
                "Lafragua",
                "Libres",
                "La Magdalena Tlatlauquitepec",
                "Mazapiltepec de Ju??rez",
                "Mixtla",
                "Molcaxac",
                "Ca??ada Morelos",
                "Naupan",
                "Nauzontla",
                "Nealtican",
                "Nicol??s Bravo",
                "Nopalucan",
                "Ocotepec",
                "Ocoyucan",
                "Olintla",
                "Oriental",
                "Pahuatl??n",
                "Palmar de Bravo",
                "Pantepec",
                "Petlalcingo",
                "Piaxtla",
                "Puebla",
                "Quecholac",
                "Quimixtl??n",
                "Rafael Lara Grajales",
                "Los Reyes de Ju??rez",
                "San Andr??s Cholula",
                "San Antonio Ca??ada",
                "San Diego la Mesa Tochimiltzingo",
                "San Felipe Teotlalcingo",
                "San Felipe Tepatl??n",
                "San Gabriel Chilac",
                "San Gregorio Atzompa",
                "San Jer??nimo Tecuanipan",
                "San Jer??nimo Xayacatl??n",
                "San Jos?? Chiapa",
                "San Jos?? Miahuatl??n",
                "San Juan Atenco",
                "San Juan Atzompa",
                "San Mart??n Texmelucan",
                "San Mart??n Totoltepec",
                "San Mat??as Tlalancaleca",
                "San Miguel Ixitl??n",
                "San Miguel Xoxtla",
                "San Nicol??s Buenos Aires",
                "San Nicol??s de los Ranchos",
                "San Pablo Anicano",
                "San Pedro Cholula",
                "San Pedro Yeloixtlahuaca",
                "San Salvador el Seco",
                "San Salvador el Verde",
                "San Salvador Huixcolotla",
                "San Sebasti??n Tlacotepec",
                "Santa Catarina Tlaltempan",
                "Santa In??s Ahuatempan",
                "Santa Isabel Cholula",
                "Santiago Miahuatl??n",
                "Huehuetl??n el Grande",
                "Santo Tom??s Hueyotlipan",
                "Soltepec",
                "Tecali de Herrera",
                "Tecamachalco",
                "Tecomatl??n",
                "Tehuac??n",
                "Tehuitzingo",
                "Tenampulco",
                "Teopantl??n",
                "Teotlalco",
                "Tepanco de L??pez",
                "Tepango de Rodr??guez",
                "Tepatlaxco de Hidalgo",
                "Tepeaca",
                "Tepemaxalco",
                "Tepeojuma",
                "Tepetzintla",
                "Tepexco",
                "Tepexi de Rodr??guez",
                "Tepeyahualco",
                "Tepeyahualco de Cuauht??moc",
                "Tetela de Ocampo",
                "Teteles de Avila Castillo",
                "Teziutl??n",
                "Tianguismanalco",
                "Tilapa",
                "Tlacotepec de Benito Ju??rez",
                "Tlacuilotepec",
                "Tlachichuca",
                "Tlahuapan",
                "Tlaltenango",
                "Tlanepantla",
                "Tlaola",
                "Tlapacoya",
                "Tlapanal??",
                "Tlatlauquitepec",
                "Tlaxco",
                "Tochimilco",
                "Tochtepec",
                "Totoltepec de Guerrero",
                "Tulcingo",
                "Tuzamapan de Galeana",
                "Tzicatlacoyan",
                "Venustiano Carranza",
                "Vicente Guerrero",
                "Xayacatl??n de Bravo",
                "Xicotepec",
                "Xicotl??n",
                "Xiutetelco",
                "Xochiapulco",
                "Xochiltepec",
                "Xochitl??n de Vicente Su??rez",
                "Xochitl??n Todos Santos",
                "Yaon??huac",
                "Yehualtepec",
                "Zacapala",
                "Zacapoaxtla",
                "Zacatl??n",
                "Zapotitl??n",
                "Zapotitl??n de M??ndez",
                "Zaragoza",
                "Zautla",
                "Zihuateutla",
                "Zinacatepec",
                "Zongozotla",
                "Zoquiapan",
                "Zoquitl??n"
            ],
            "Quer??taro": [
                "Amealco de Bonfil",
                "Pinal de Amoles",
                "Arroyo Seco",
                "Cadereyta de Montes",
                "Col??n",
                "Corregidora",
                "Ezequiel Montes",
                "Huimilpan",
                "Jalpan de Serra",
                "Landa de Matamoros",
                "El Marqu??s",
                "Pedro Escobedo",
                "Pe??amiller",
                "Quer??taro",
                "San Joaqu??n",
                "San Juan del R??o",
                "Tequisquiapan",
                "Tolim??n"
            ],
            "Quintana Roo": [
                "Cozumel",
                "Felipe Carrillo Puerto",
                "Isla Mujeres",
                "Oth??n P. Blanco",
                "Benito Ju??rez",
                "Jos?? Mar??a Morelos",
                "L??zaro C??rdenas",
                "Solidaridad",
                "Tulum",
                "Bacalar",
                "Puerto Morelos"
            ],
            "San Luis Potos??": [
                "Ahualulco",
                "Alaquines",
                "Aquism??n",
                "Armadillo de los Infante",
                "C??rdenas",
                "Catorce",
                "Cedral",
                "Cerritos",
                "Cerro de San Pedro",
                "Ciudad del Ma??z",
                "Ciudad Fern??ndez",
                "Tancanhuitz",
                "Ciudad Valles",
                "Coxcatl??n",
                "Charcas",
                "Ebano",
                "Guadalc??zar",
                "Huehuetl??n",
                "Lagunillas",
                "Matehuala",
                "Mexquitic de Carmona",
                "Moctezuma",
                "Ray??n",
                "Rioverde",
                "Salinas",
                "San Antonio",
                "San Ciro de Acosta",
                "San Luis Potos??",
                "San Mart??n Chalchicuautla",
                "San Nicol??s Tolentino",
                "Santa Catarina",
                "Santa Mar??a del R??o",
                "Santo Domingo",
                "San Vicente Tancuayalab",
                "Soledad de Graciano S??nchez",
                "Tamasopo",
                "Tamazunchale",
                "Tampac??n",
                "Tampamol??n Corona",
                "Tamu??n",
                "Tanlaj??s",
                "Tanqui??n de Escobedo",
                "Tierra Nueva",
                "Vanegas",
                "Venado",
                "Villa de Arriaga",
                "Villa de Guadalupe",
                "Villa de la Paz",
                "Villa de Ramos",
                "Villa de Reyes",
                "Villa Hidalgo",
                "Villa Ju??rez",
                "Axtla de Terrazas",
                "Xilitla",
                "Zaragoza",
                "Villa de Arista",
                "Matlapa",
                "El Naranjo"
            ],
            "Sinaloa": [
                "Ahome",
                "Angostura",
                "Badiraguato",
                "Concordia",
                "Cosal??",
                "Culiac??n",
                "Choix",
                "Elota",
                "Escuinapa",
                "El Fuerte",
                "Guasave",
                "Mazatl??n",
                "Mocorito",
                "Rosario",
                "Salvador Alvarado",
                "San Ignacio",
                "Sinaloa",
                "Navolato"
            ],
            "Sonora": [
                "Aconchi",
                "Agua Prieta",
                "Alamos",
                "Altar",
                "Arivechi",
                "Arizpe",
                "Atil",
                "Bacad??huachi",
                "Bacanora",
                "Bacerac",
                "Bacoachi",
                "B??cum",
                "Ban??michi",
                "Bavi??cora",
                "Bavispe",
                "Benjam??n Hill",
                "Caborca",
                "Cajeme",
                "Cananea",
                "Carb??",
                "La Colorada",
                "Cucurpe",
                "Cumpas",
                "Divisaderos",
                "Empalme",
                "Etchojoa",
                "Fronteras",
                "Granados",
                "Guaymas",
                "Hermosillo",
                "Huachinera",
                "Hu??sabas",
                "Huatabampo",
                "Hu??pac",
                "Imuris",
                "Magdalena",
                "Mazat??n",
                "Moctezuma",
                "Naco",
                "N??cori Chico",
                "Nacozari de Garc??a",
                "Navojoa",
                "Nogales",
                "Onavas",
                "Opodepe",
                "Oquitoa",
                "Pitiquito",
                "Puerto Pe??asco",
                "Quiriego",
                "Ray??n",
                "Rosario",
                "Sahuaripa",
                "San Felipe de Jes??s",
                "San Javier",
                "San Luis R??o Colorado",
                "San Miguel de Horcasitas",
                "San Pedro de la Cueva",
                "Santa Ana",
                "Santa Cruz",
                "S??ric",
                "Soyopa",
                "Suaqui Grande",
                "Tepache",
                "Trincheras",
                "Tubutama",
                "Ures",
                "Villa Hidalgo",
                "Villa Pesqueira",
                "Y??cora",
                "General Plutarco El??as Calles",
                "Benito Ju??rez",
                "San Ignacio R??o Muerto"
            ],
            "Tabasco": [
                "Balanc??n",
                "C??rdenas",
                "Centla",
                "Centro",
                "Comalcalco",
                "Cunduac??n",
                "Emiliano Zapata",
                "Huimanguillo",
                "Jalapa",
                "Jalpa de M??ndez",
                "Jonuta",
                "Macuspana",
                "Nacajuca",
                "Para??so",
                "Tacotalpa",
                "Teapa",
                "Tenosique"
            ],
            "Tamaulipas": [
                "Abasolo",
                "Aldama",
                "Altamira",
                "Antiguo Morelos",
                "Burgos",
                "Bustamante",
                "Camargo",
                "Casas",
                "Ciudad Madero",
                "Cruillas",
                "G??mez Far??as",
                "Gonz??lez",
                "G????mez",
                "Guerrero",
                "Gustavo D??az Ordaz",
                "Hidalgo",
                "Jaumave",
                "Jim??nez",
                "Llera",
                "Mainero",
                "El Mante",
                "Matamoros",
                "M??ndez",
                "Mier",
                "Miguel Alem??n",
                "Miquihuana",
                "Nuevo Laredo",
                "Nuevo Morelos",
                "Ocampo",
                "Padilla",
                "Palmillas",
                "Reynosa",
                "R??o Bravo",
                "San Carlos",
                "San Fernando",
                "San Nicol??s",
                "Soto la Marina",
                "Tampico",
                "Tula",
                "Valle Hermoso",
                "Victoria",
                "Villagr??n",
                "Xicot??ncatl"
            ],
            "Tlaxcala": [
                "Amaxac de Guerrero",
                "Apetatitl??n de Antonio Carvajal",
                "Atlangatepec",
                "Atltzayanca",
                "Apizaco",
                "Calpulalpan",
                "El Carmen Tequexquitla",
                "Cuapiaxtla",
                "Cuaxomulco",
                "Chiautempan",
                "Mu??oz de Domingo Arenas",
                "Espa??ita",
                "Huamantla",
                "Hueyotlipan",
                "Ixtacuixtla de Mariano Matamoros",
                "Ixtenco",
                "Mazatecochco de Jos?? Mar??a Morelos",
                "Contla de Juan Cuamatzi",
                "Tepetitla de Lardiz??bal",
                "Sanct??rum de L??zaro C??rdenas",
                "Nanacamilpa de Mariano Arista",
                "Acuamanala de Miguel Hidalgo",
                "Nat??vitas",
                "Panotla",
                "San Pablo del Monte",
                "Santa Cruz Tlaxcala",
                "Tenancingo",
                "Teolocholco",
                "Tepeyanco",
                "Terrenate",
                "Tetla de la Solidaridad",
                "Tetlatlahuca",
                "Tlaxcala",
                "Tlaxco",
                "Tocatl??n",
                "Totolac",
                "Ziltlalt??pec de Trinidad S??nchez Santos",
                "Tzompantepec",
                "Xaloztoc",
                "Xaltocan",
                "Papalotla de Xicoht??ncatl",
                "Xicohtzinco",
                "Yauhquemehcan",
                "Zacatelco",
                "Benito Ju??rez",
                "Emiliano Zapata",
                "L??zaro C??rdenas",
                "La Magdalena Tlaltelulco",
                "San Dami??n Tex??loc",
                "San Francisco Tetlanohcan",
                "San Jer??nimo Zacualpan",
                "San Jos?? Teacalco",
                "San Juan Huactzinco",
                "San Lorenzo Axocomanitla",
                "San Lucas Tecopilco",
                "Santa Ana Nopalucan",
                "Santa Apolonia Teacalco",
                "Santa Catarina Ayometla",
                "Santa Cruz Quilehtla",
                "Santa Isabel Xiloxoxtla"
            ],
            "Veracruz de Ignacio de la Llave": [
                "Acajete",
                "Acatl??n",
                "Acayucan",
                "Actopan",
                "Acula",
                "Acultzingo",
                "Camar??n de Tejeda",
                "Alpatl??huac",
                "Alto Lucero de Guti??rrez Barrios",
                "Altotonga",
                "Alvarado",
                "Amatitl??n",
                "Naranjos Amatl??n",
                "Amatl??n de los Reyes",
                "Angel R. Cabada",
                "La Antigua",
                "Apazapan",
                "Aquila",
                "Astacinga",
                "Atlahuilco",
                "Atoyac",
                "Atzacan",
                "Atzalan",
                "Tlaltetela",
                "Ayahualulco",
                "Banderilla",
                "Benito Ju??rez",
                "Boca del R??o",
                "Calcahualco",
                "Camerino Z. Mendoza",
                "Carrillo Puerto",
                "Catemaco",
                "Cazones de Herrera",
                "Cerro Azul",
                "Citlalt??petl",
                "Coacoatzintla",
                "Coahuitl??n",
                "Coatepec",
                "Coatzacoalcos",
                "Coatzintla",
                "Coetzala",
                "Colipa",
                "Comapa",
                "C??rdoba",
                "Cosamaloapan de Carpio",
                "Cosautl??n de Carvajal",
                "Coscomatepec",
                "Cosoleacaque",
                "Cotaxtla",
                "Coxquihui",
                "Coyutla",
                "Cuichapa",
                "Cuitl??huac",
                "Chacaltianguis",
                "Chalma",
                "Chiconamel",
                "Chiconquiaco",
                "Chicontepec",
                "Chinameca",
                "Chinampa de Gorostiza",
                "Las Choapas",
                "Chocam??n",
                "Chontla",
                "Chumatl??n",
                "Emiliano Zapata",
                "Espinal",
                "Filomeno Mata",
                "Fort??n",
                "Guti??rrez Zamora",
                "Hidalgotitl??n",
                "Huatusco",
                "Huayacocotla",
                "Hueyapan de Ocampo",
                "Huiloapan de Cuauht??moc",
                "Ignacio de la Llave",
                "Ilamatl??n",
                "Isla",
                "Ixcatepec",
                "Ixhuac??n de los Reyes",
                "Ixhuatl??n del Caf??",
                "Ixhuatlancillo",
                "Ixhuatl??n del Sureste",
                "Ixhuatl??n de Madero",
                "Ixmatlahuacan",
                "Ixtaczoquitl??n",
                "Jalacingo",
                "Xalapa",
                "Jalcomulco",
                "J??ltipan",
                "Jamapa",
                "Jes??s Carranza",
                "Xico",
                "Jilotepec",
                "Juan Rodr??guez Clara",
                "Juchique de Ferrer",
                "Landero y Coss",
                "Lerdo de Tejada",
                "Magdalena",
                "Maltrata",
                "Manlio Fabio Altamirano",
                "Mariano Escobedo",
                "Mart??nez de la Torre",
                "Mecatl??n",
                "Mecayapan",
                "Medell??n de Bravo",
                "Miahuatl??n",
                "Las Minas",
                "Minatitl??n",
                "Misantla",
                "Mixtla de Altamirano",
                "Moloac??n",
                "Naolinco",
                "Naranjal",
                "Nautla",
                "Nogales",
                "Oluta",
                "Omealca",
                "Orizaba",
                "Otatitl??n",
                "Oteapan",
                "Ozuluama de Mascare??as",
                "Pajapan",
                "P??nuco",
                "Papantla",
                "Paso del Macho",
                "Paso de Ovejas",
                "La Perla",
                "Perote",
                "Plat??n S??nchez",
                "Playa Vicente",
                "Poza Rica de Hidalgo",
                "Las Vigas de Ram??rez",
                "Pueblo Viejo",
                "Puente Nacional",
                "Rafael Delgado",
                "Rafael Lucio",
                "Los Reyes",
                "R??o Blanco",
                "Saltabarranca",
                "San Andr??s Tenejapan",
                "San Andr??s Tuxtla",
                "San Juan Evangelista",
                "Santiago Tuxtla",
                "Sayula de Alem??n",
                "Soconusco",
                "Sochiapa",
                "Soledad Atzompa",
                "Soledad de Doblado",
                "Soteapan",
                "Tamal??n",
                "Tamiahua",
                "Tampico Alto",
                "Tancoco",
                "Tantima",
                "Tantoyuca",
                "Tatatila",
                "Castillo de Teayo",
                "Tecolutla",
                "Tehuipango",
                "??lamo Temapache",
                "Tempoal",
                "Tenampa",
                "Tenochtitl??n",
                "Teocelo",
                "Tepatlaxco",
                "Tepetl??n",
                "Tepetzintla",
                "Tequila",
                "Jos?? Azueta",
                "Texcatepec",
                "Texhuac??n",
                "Texistepec",
                "Tezonapa",
                "Tierra Blanca",
                "Tihuatl??n",
                "Tlacojalpan",
                "Tlacolulan",
                "Tlacotalpan",
                "Tlacotepec de Mej??a",
                "Tlachichilco",
                "Tlalixcoyan",
                "Tlalnelhuayocan",
                "Tlapacoyan",
                "Tlaquilpa",
                "Tlilapan",
                "Tomatl??n",
                "Tonay??n",
                "Totutla",
                "Tuxpan",
                "Tuxtilla",
                "Ursulo Galv??n",
                "Vega de Alatorre",
                "Veracruz",
                "Villa Aldama",
                "Xoxocotla",
                "Yanga",
                "Yecuatla",
                "Zacualpan",
                "Zaragoza",
                "Zentla",
                "Zongolica",
                "Zontecomatl??n de L??pez y Fuentes",
                "Zozocolco de Hidalgo",
                "Agua Dulce",
                "El Higo",
                "Nanchital de L??zaro C??rdenas del R??o",
                "Tres Valles",
                "Carlos A. Carrillo",
                "Tatahuicapan de Ju??rez",
                "Uxpanapa",
                "San Rafael",
                "Santiago Sochiapan"
            ],
            "Yucat??n": [
                "Abal??",
                "Acanceh",
                "Akil",
                "Baca",
                "Bokob??",
                "Buctzotz",
                "Cacalch??n",
                "Calotmul",
                "Cansahcab",
                "Cantamayec",
                "Celest??n",
                "Cenotillo",
                "Conkal",
                "Cuncunul",
                "Cuzam??",
                "Chacsink??n",
                "Chankom",
                "Chapab",
                "Chemax",
                "Chicxulub Pueblo",
                "Chichimil??",
                "Chikindzonot",
                "Chochol??",
                "Chumayel",
                "Dz??n",
                "Dzemul",
                "Dzidzant??n",
                "Dzilam de Bravo",
                "Dzilam Gonz??lez",
                "Dzit??s",
                "Dzoncauich",
                "Espita",
                "Halach??",
                "Hocab??",
                "Hoct??n",
                "Hom??n",
                "Huh??",
                "Hunucm??",
                "Ixil",
                "Izamal",
                "Kanas??n",
                "Kantunil",
                "Kaua",
                "Kinchil",
                "Kopom??",
                "Mama",
                "Man??",
                "Maxcan??",
                "Mayap??n",
                "M??rida",
                "Mococh??",
                "Motul",
                "Muna",
                "Muxupip",
                "Opich??n",
                "Oxkutzcab",
                "Panab??",
                "Peto",
                "Progreso",
                "Quintana Roo",
                "R??o Lagartos",
                "Sacalum",
                "Samahil",
                "Sanahcat",
                "San Felipe",
                "Santa Elena",
                "Sey??",
                "Sinanch??",
                "Sotuta",
                "Sucil??",
                "Sudzal",
                "Suma",
                "Tahdzi??",
                "Tahmek",
                "Teabo",
                "Tecoh",
                "Tekal de Venegas",
                "Tekant??",
                "Tekax",
                "Tekit",
                "Tekom",
                "Telchac Pueblo",
                "Telchac Puerto",
                "Temax",
                "Temoz??n",
                "Tepak??n",
                "Tetiz",
                "Teya",
                "Ticul",
                "Timucuy",
                "Tinum",
                "Tixcacalcupul",
                "Tixkokob",
                "Tixmehuac",
                "Tixp??hual",
                "Tizim??n",
                "Tunk??s",
                "Tzucacab",
                "Uayma",
                "Uc??",
                "Um??n",
                "Valladolid",
                "Xocchel",
                "Yaxcab??",
                "Yaxkukul",
                "Yoba??n"
            ],
            "Zacatecas": [
                "Apozol",
                "Apulco",
                "Atolinga",
                "Benito Ju??rez",
                "Calera",
                "Ca??itas de Felipe Pescador",
                "Concepci??n del Oro",
                "Cuauht??moc",
                "Chalchihuites",
                "Fresnillo",
                "Trinidad Garc??a de la Cadena",
                "Genaro Codina",
                "General Enrique Estrada",
                "General Francisco R. Murgu??a",
                "El Plateado de Joaqu??n Amaro",
                "General P??nfilo Natera",
                "Guadalupe",
                "Huanusco",
                "Jalpa",
                "Jerez",
                "Jim??nez del Teul",
                "Juan Aldama",
                "Juchipila",
                "Loreto",
                "Luis Moya",
                "Mazapil",
                "Melchor Ocampo",
                "Mezquital del Oro",
                "Miguel Auza",
                "Momax",
                "Monte Escobedo",
                "Morelos",
                "Moyahua de Estrada",
                "Nochistl??n de Mej??a",
                "Noria de ??ngeles",
                "Ojocaliente",
                "P??nuco",
                "Pinos",
                "R??o Grande",
                "Sain Alto",
                "El Salvador",
                "Sombrerete",
                "Susticac??n",
                "Tabasco",
                "Tepechitl??n",
                "Tepetongo",
                "Te??l de Gonz??lez Ortega",
                "Tlaltenango de S??nchez Rom??n",
                "Valpara??so",
                "Vetagrande",
                "Villa de Cos",
                "Villa Garc??a",
                "Villa Gonz??lez Ortega",
                "Villa Hidalgo",
                "Villanueva",
                "Zacatecas",
                "Trancoso",
                "Santa Mar??a de la Paz"
            ]
        };
        this.estados = Object.keys(this.data);
        this.buildForm();
    }
    ClienteFormComponent.prototype.ngOnInit = function () {
    };
    ClienteFormComponent.prototype.reset = function () {
        this.form.reset();
    };
    ClienteFormComponent.prototype.buildForm = function () {
        this.form = this.formB.group({
            curp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            rfc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            nss: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            apaterno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            amaterno: ['', []],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email],
            calle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            n_ext: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            n_int: [''],
            colonia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            estado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            municipio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            cp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            cr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            comentarios: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        });
    };
    ClienteFormComponent.prototype.getMunicipios = function () {
        var edo = this.form.get('estado').value;
        this.municipios = this.data[edo];
    };
    ClienteFormComponent.prototype.saveForm = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.form.valid) {
            console.warn('el formulario es valido');
            this.sClientes.saveCliente(this.form.value)
                .subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    icon: 'success',
                    title: 'Se ha guardado el cliente satisfactoriamente.',
                    showConfirmButton: false,
                    timer: 1500
                }).finally(function () {
                    _this.router.navigateByUrl('listaClientes');
                });
            }, function (err) { return console.error(err); });
        }
        else {
            console.error('el formulario no es valido');
        }
        console.log(this.form.value);
    };
    ClienteFormComponent.ctorParameters = function () { return [
        { type: _services_s_municipios_service__WEBPACK_IMPORTED_MODULE_4__["SMunicipiosService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _services_s_clientes_service__WEBPACK_IMPORTED_MODULE_3__["SClientesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    ClienteFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-cliente-form',
            template: _raw_loader_cliente_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_cliente_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_s_municipios_service__WEBPACK_IMPORTED_MODULE_4__["SMunicipiosService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _services_s_clientes_service__WEBPACK_IMPORTED_MODULE_3__["SClientesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], ClienteFormComponent);
    return ClienteFormComponent;
}());



/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"sidebar\"><app-sidebar></app-sidebar></div>\r\n  <div class=\"main-panel\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n<div class=\" fixed-plugin\">\r\n  <div class=\" show-dropdown\" ngbDropdown>\r\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\r\n      <i class=\" fa fa-cog fa-2x\"> </i>\r\n    </a>\r\n    <ul ngbDropdownMenu>\r\n      <li class=\" header-title\">Sidebar Background</li>\r\n      <li class=\" adjustments-line\">\r\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\r\n          <div class=\" badge-colors text-center\">\r\n            <span\r\n              class=\" badge filter badge-danger\"\r\n              [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"\r\n            >\r\n            </span>\r\n            <span\r\n              class=\" badge filter badge-primary\"\r\n              [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"\r\n            >\r\n            </span>\r\n            <span class=\" badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\r\n            <span class=\" badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\">\r\n            </span>\r\n          </div>\r\n          <div class=\" clearfix\"></div>\r\n        </a>\r\n      </li>\r\n      <li class=\" adjustments-line text-center color-change\">\r\n        <span class=\" color-label\"> LIGHT MODE </span>\r\n        <span class=\" badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\r\n        <span class=\" badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\r\n        <span class=\" color-label\"> DARK MODE </span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "FkQd":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n  <a [routerLink]=\"['dashboard']\" class=\"simple-text logo-mini\">\r\n    <div class=\"logo-img\">\r\n      <img src=\"./assets/img/angular2-logo-white.png\" />\r\n    </div>\r\n  </a>\r\n  <a [routerLink]=\"['dashboard']\" class=\"simple-text logo-normal\">\r\n    GENEFA\r\n  </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n  <ul class=\"nav\">\r\n    <li\r\n      routerLinkActive=\"active\"\r\n      *ngFor=\"let menuItem of menuItems\"\r\n      class=\"{{ menuItem.class }} nav-item\"\r\n    >\r\n      <a [routerLink]=\"[menuItem.path]\">\r\n        <i class=\"tim-icons  {{ menuItem.icon }}\"></i>\r\n        <p>{{ menuItem.title }}</p>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-footer",
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        this.sidebarColor = "red";
    }
    AdminLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AdminLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () { };
    AdminLayoutComponent.ctorParameters = function () { return []; };
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-admin-layout",
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\" navbar navbar-expand-lg navbar-absolute navbar-transparent\">\r\n  <div class=\" container-fluid\">\r\n    <div class=\" navbar-wrapper\">\r\n      <div class=\" navbar-toggle d-inline\">\r\n        <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n          <span class=\" navbar-toggler-bar bar1\"> </span>\r\n          <span class=\" navbar-toggler-bar bar2\"> </span>\r\n          <span class=\" navbar-toggler-bar bar3\"> </span>\r\n        </button>\r\n      </div>\r\n      <a class=\" navbar-brand\" href=\"javascript:void(0)\"> {{ getTitle() }} </a>\r\n    </div>\r\n    <button\r\n      aria-label=\"Toggle navigation\"\r\n      class=\" navbar-toggler\"\r\n      (click)=\"collapse()\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      aria-controls=\"collapseExample\"\r\n      id=\"navigation\"\r\n      type=\"button\"\r\n    >\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n    </button>\r\n    <div class=\" navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\r\n      <ul class=\" navbar-nav ml-auto\">\r\n        <li class=\" search-bar input-group\">\r\n          <button\r\n            class=\" btn btn-link\"\r\n            data-target=\"#searchModal\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"open(content)\"\r\n            id=\"search-button\"\r\n          >\r\n            <i class=\" tim-icons icon-zoom-split\"> </i>\r\n            <span class=\" d-lg-none d-md-block\"> Buscar </span>\r\n          </button>\r\n        </li>\r\n        <li class=\" nav-item\" ngbDropdown>\r\n          <a\r\n            class=\" nav-link\"\r\n            data-toggle=\"dropdown\"\r\n            href=\"javascript:void(0)\"\r\n            ngbDropdownToggle\r\n          >\r\n            <div class=\" photo\">\r\n              <img alt=\"Profile Photo\" src=\"assets/img/anime3.png\" />\r\n            </div>\r\n            <b class=\" caret d-none d-lg-block d-xl-block\"> </b>\r\n            <p class=\" d-lg-none\">Nombre de usuario</p>\r\n          </a>\r\n          <ul class=\" dropdown-navbar\" ngbDropdownMenu>\r\n            <li class=\" nav-link\">\r\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                Perfil\r\n              </a>\r\n            </li>\r\n            <li class=\" dropdown-divider\"></li>\r\n            <li class=\" nav-link\">\r\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                Cerrar sesion\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\" separator d-lg-none\"></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\" modal-header\">\r\n    <input\r\n      class=\" form-control\"\r\n      id=\"inlineFormInputGroup\"\r\n      placeholder=\"SEARCH\"\r\n      type=\"text\"\r\n    />\r\n\r\n    <button\r\n      aria-label=\"Close\"\r\n      class=\" close\"\r\n      data-dismiss=\"modal\"\r\n      type=\"button\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <i class=\" tim-icons icon-simple-remove\"> </i>\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "black-dashboard-angular";
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "WSaj":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"sidebar\">\r\n    <div class=\"logo\">\r\n      <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-sidebar-logo\" class=\"simple-text logo-mini\">\r\n        <div class=\"logo-img\">\r\n          <img src=\"./assets/img/angular2-logo-white.png\" />\r\n        </div>\r\n      </a>\r\n      <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-sidebar-logo\" class=\"simple-text logo-normal\">\r\n        ?????????????????? ??????\r\n      </a>\r\n    </div>\r\n    <div class=\"sidebar-wrapper\">\r\n      <ul class=\"nav\">\r\n        <li\r\n          routerLinkActive=\"active\"\r\n          *ngFor=\"let menuItem of menuItems\"\r\n          class=\"{{ menuItem.class }} nav-item\"\r\n        >\r\n          <a [routerLink]=\"[menuItem.path]\">\r\n            <i class=\"tim-icons  {{ menuItem.icon }}\"></i>\r\n            <p>{{ menuItem.rtlTitle }}</p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"main-panel\">\r\n    <nav class=\" navbar navbar-expand-lg navbar-absolute navbar-transparent\">\r\n      <div class=\" container-fluid\">\r\n        <div class=\" navbar-wrapper\">\r\n          <div class=\" navbar-toggle d-inline\">\r\n            <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n              <span class=\" navbar-toggler-bar bar1\"> </span>\r\n              <span class=\" navbar-toggler-bar bar2\"> </span>\r\n              <span class=\" navbar-toggler-bar bar3\"> </span>\r\n            </button>\r\n          </div>\r\n          <a class=\" navbar-brand\" href=\"javascript:void(0)\"> ???? ???? ???? </a>\r\n        </div>\r\n        <button\r\n          aria-label=\"Toggle navigation\"\r\n          class=\" navbar-toggler\"\r\n          (click)=\"collapse()\"\r\n          [attr.aria-expanded]=\"!isCollapsed\"\r\n          aria-controls=\"collapseExample\"\r\n          id=\"navigation\"\r\n          type=\"button\"\r\n        >\r\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n        </button>\r\n        <div class=\" navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\r\n          <ul class=\" navbar-nav mr-auto\">\r\n            <li class=\" search-bar input-group\">\r\n              <button\r\n                class=\" btn btn-link\"\r\n                data-target=\"#searchModal\"\r\n                data-toggle=\"modal\"\r\n                (click)=\"open(content)\"\r\n                id=\"search-button\"\r\n              >\r\n                <i class=\" tim-icons icon-zoom-split\"> </i>\r\n                <span class=\" d-lg-none d-md-block\"> ?????? </span>\r\n              </button>\r\n            </li>\r\n            <li class=\" nav-item\" ngbDropdown>\r\n              <a\r\n                class=\" nav-link\"\r\n                data-toggle=\"dropdown\"\r\n                ngbDropdownToggle\r\n              >\r\n                <div class=\" notification d-none d-lg-block d-xl-block\"></div>\r\n                <i class=\" tim-icons icon-sound-wave\"> </i>\r\n                <p class=\" d-lg-none\">??????????????</p>\r\n              </a>\r\n              <ul class=\" dropdown-menu-right dropdown-navbar\" ngbDropdownMenu>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    ?????? ???????? ?????? ?????? ?????????? ????????????????????\r\n                  </a>\r\n                </li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    ???????? 5 ???????? ????????\r\n                  </a>\r\n                </li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    ?????????? ?????????? ???? ??????????????\r\n                  </a>\r\n                </li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    ?????????? ??????\r\n                  </a>\r\n                </li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    ?????????? ????????\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li class=\" nav-item\" ngbDropdown>\r\n              <a\r\n                class=\" nav-link\"\r\n                data-toggle=\"dropdown\"\r\n                ngbDropdownToggle\r\n              >\r\n                <div class=\" photo\">\r\n                  <img alt=\"Profile Photo\" src=\"assets/img/anime3.png\" />\r\n                </div>\r\n                <b class=\" caret d-none d-lg-block d-xl-block\"> </b>\r\n                <p class=\" d-lg-none\">????????????</p>\r\n              </a>\r\n              <ul class=\" dropdown-navbar\" ngbDropdownMenu>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    ?????????? ????????????\r\n                  </a>\r\n                </li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    ??????????????????\r\n                  </a>\r\n                </li>\r\n                <li class=\" dropdown-divider\"></li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    ????????????\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li class=\" separator d-lg-none\"></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n    <footer class=\" footer\">\r\n      <div class=\" container-fluid\">\r\n        <ul class=\" nav\">\r\n          <li class=\" nav-item\">\r\n            <a class=\" nav-link\" href=\"https://www.creative-tim.com?ref=bda-auth-layout-footer\">\r\n              ?????? ??????????????????\r\n            </a>\r\n          </li>\r\n          <li class=\" nav-item\">\r\n            <a class=\" nav-link\" href=\"https://www.creative-tim.com/about-us?ref=bda-auth-layout-footer\">\r\n              ?????????????? ??????\r\n            </a>\r\n          </li>\r\n          <li class=\" nav-item\">\r\n            <a class=\" nav-link\" href=\"http://blog.creative-tim.com?ref=bda-auth-layout-footer\"> ?????????? </a>\r\n          </li>\r\n        </ul>\r\n        <div class=\" copyright\">\r\n          &copy; {{ test | date: \"yyyy\" }} ?????????? ????\r\n          <i class=\" tim-icons icon-heart-2\"> </i> ????????????\r\n          <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-footer\" target=\"_blank\"> ?????? ?????????????????? </a>\r\n          ???? ?????? ???????? ????????.\r\n        </div>\r\n      </div>\r\n    </footer>\r\n\r\n  </div>\r\n</div>\r\n<div class=\" fixed-plugin\">\r\n  <div class=\" show-dropdown\" ngbDropdown>\r\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\r\n      <i class=\" fa fa-cog fa-2x\"> </i>\r\n    </a>\r\n    <ul ngbDropdownMenu>\r\n      <li class=\" header-title\">?????????? ???????????? ??????????????</li>\r\n      <li class=\" adjustments-line\">\r\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\r\n          <div class=\" badge-colors text-center\">\r\n            <span\r\n              class=\" badge filter badge-danger\"\r\n              [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"\r\n            >\r\n            </span>\r\n            <span\r\n              class=\" badge filter badge-primary\"\r\n              data-color=\"primary\"\r\n              [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"\r\n            >\r\n            </span>\r\n            <span class=\" badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\r\n            <span class=\" badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\">\r\n            </span>\r\n          </div>\r\n          <div class=\" clearfix\"></div>\r\n        </a>\r\n      </li>\r\n      <li class=\" adjustments-line text-center color-change\">\r\n        <span class=\" color-label\"> ?????? ?????????? </span>\r\n        <span class=\" badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\r\n        <span class=\" badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\r\n        <span class=\" color-label\"> ?????? ????????????</span>\r\n      </li>\r\n      <li class=\" button-container\">\r\n        <a\r\n          class=\" btn btn-primary btn-block btn-round\"\r\n          href=\"https://www.creative-tim.com/product/black-dashboard-angular?ref=bda-auth-layout-fixed-plugin\"\r\n          target=\"_blank\"\r\n        >\r\n          ?????????????? ????????\r\n        </a>\r\n        <a\r\n          class=\" btn btn-default btn-block btn-round\"\r\n          href=\"https://demos.creative-tim.com/black-dashboard-angular/#/documentation/tutorial?ref=bda-auth-layout-fixed-plugin\"\r\n          target=\"_blank\"\r\n        >\r\n          ???????? ????????????\r\n        </a>\r\n      </li>\r\n      <li class=\" header-title\">???????? ???? ?????? 95 ??????!</li>\r\n      <li class=\" button-container text-center\">\r\n        <button class=\" btn btn-round btn-info\" id=\"twitter\">\r\n          <i class=\" fab fa-twitter\"> </i> ?? 45\r\n        </button>\r\n        <button class=\" btn btn-round btn-info\" id=\"facebook\">\r\n          <i class=\" fab fa-facebook-f\"> </i> ?? 50\r\n        </button>\r\n        <br />\r\n\r\n        <br />\r\n\r\n        <a\r\n          aria-label=\"Star ntkme/github-buttons on GitHub\"\r\n          class=\" github-button\"\r\n          data-icon=\"octicon-star\"\r\n          data-show-count=\"true\"\r\n          data-size=\"large\"\r\n          href=\"https://github.com/creativetimofficial/black-dashboard-angular?ref=bda-auth-layout-fixed-plugin\"\r\n        >\r\n          ????????\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n    <ng-template #content let-modal>\r\n      <div class=\" modal-header\">\r\n        <input\r\n          class=\" form-control\"\r\n          id=\"inlineFormInputGroup\"\r\n          placeholder=\"??????\"\r\n          type=\"text\"\r\n        />\r\n\r\n        <button\r\n          aria-label=\"Close\"\r\n          class=\" close\"\r\n          data-dismiss=\"modal\"\r\n          type=\"button\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          <i class=\" tim-icons icon-simple-remove\"> </i>\r\n        </button>\r\n      </div>\r\n\r\n    </ng-template>\r\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\" footer\">\r\n  <div class=\" container-fluid\">\r\n    <ul class=\" nav\">\r\n      <li class=\" nav-item\">\r\n        <a class=\" nav-link\" href=\"https://www.creative-tim.com?ref=bda-footer\">\r\n          Creative Tim\r\n        </a>\r\n      </li>\r\n      <li class=\" nav-item\">\r\n        <a class=\" nav-link\" href=\"https://www.creative-tim.com/about-us?ref=bda-footer\">\r\n          About Us\r\n        </a>\r\n      </li>\r\n      <li class=\" nav-item\">\r\n        <a class=\" nav-link\" href=\"http://blog.creative-tim.com?ref=bda-footer\"> Blog </a>\r\n      </li>\r\n    </ul>\r\n    <div class=\" copyright\">\r\n      &copy; {{ test | date: \"yyyy\" }} made with\r\n      <i class=\" tim-icons icon-heart-2\"> </i> by\r\n      <a href=\"https://www.creative-tim.com?ref=bda-footer\" target=\"_blank\"> Creative Tim </a>\r\n      for a better web.\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__["AuthLayoutComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ccX7":
/*!************************************************!*\
  !*** ./src/app/services/s-clientes.service.ts ***!
  \************************************************/
/*! exports provided: SClientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SClientesService", function() { return SClientesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var SClientesService = /** @class */ (function () {
    function SClientesService(http) {
        this.http = http;
        this.base_url = 'https://genefapi.herokuapp.com/api/';
    }
    SClientesService.prototype.getAllClientes = function () {
        return this.http.get(this.base_url + "clientes");
    };
    SClientesService.prototype.saveCliente = function (data) {
        return this.http.post(this.base_url + "clientes", data);
    };
    SClientesService.prototype.getClienteByID = function (id) {
        return this.http.get(this.base_url + "clientes/" + id);
    };
    SClientesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SClientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SClientesService);
    return SClientesService;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"PTPi",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, modalService) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.modalService = modalService;
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('navbar-transparent');
            }
        };
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener("resize", this.updateColor);
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName("close-layer")[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName("nav")[0];
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("bg-white");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("bg-white");
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName("html")[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove("nav-open");
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove("toggled");
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add("toggled");
            }, 430);
            var $layer = document.createElement("div");
            $layer.setAttribute("class", "close-layer");
            if (html.querySelectorAll(".main-panel")) {
                document.getElementsByClassName("main-panel")[0].appendChild($layer);
            }
            else if (html.classList.contains("off-canvas-sidebar")) {
                document
                    .getElementsByClassName("wrapper-full-page")[0]
                    .appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add("visible");
            }, 100);
            $layer.onclick = function () {
                //asign a function
                html.classList.remove("nav-open");
                this.mobile_menu_visible = 0;
                $layer.classList.remove("visible");
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove("toggled");
                }, 400);
            }.bind(this);
            html.classList.add("nav-open");
            this.mobile_menu_visible = 1;
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    };
    NavbarComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NavbarComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener("resize", this.updateColor);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-navbar",
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cliente-form/cliente-form.component */ "ADbd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_8__["ClienteFormComponent"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_8__["ClienteFormComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "raJY":
/*!**************************************************!*\
  !*** ./src/app/services/s-municipios.service.ts ***!
  \**************************************************/
/*! exports provided: SMunicipiosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMunicipiosService", function() { return SMunicipiosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var SMunicipiosService = /** @class */ (function () {
    function SMunicipiosService(http) {
        this.http = http;
        this.TOKEN = '112a9ef1-9f7e-4973-9653-c0a94f05a016';
    }
    SMunicipiosService.prototype.getEstados = function () {
        return this.http.get("https://api-sepomex.hckdrk.mx/query/get_estados?token=" + this.TOKEN);
    };
    SMunicipiosService.prototype.getMunicipios = function (estado) {
        return this.http.get("https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/" + estado + "?token=" + this.TOKEN);
    };
    SMunicipiosService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SMunicipiosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SMunicipiosService);
    return SMunicipiosService;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");







var routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: "",
                loadChildren: "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    },
    {
        path: "**",
        redirectTo: "dashboard"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ROUTES = [
    {
        path: "/dashboard",
        title: "Dashboard",
        rtlTitle: "???????? ??????????????",
        icon: "icon-chart-pie-36",
        class: ""
    },
    {
        path: "/nCliente",
        title: "Nuevo cliente",
        rtlTitle: "????????????",
        icon: "icon-simple-add",
        class: ""
    },
    {
        path: "/listaClientes",
        title: "Lista de clientes",
        rtlTitle: "??????????",
        icon: "icon-notes",
        class: ""
    },
    {
        path: "/nTramite",
        title: "Nuevo tramite",
        rtlTitle: "??????????????",
        icon: "icon-simple-add",
        class: ""
    },
    {
        path: "/listaTramites",
        title: "Lista de tramites",
        rtlTitle: "?????? ???????????? ????????????????",
        icon: "icon-notes",
        class: ""
    },
    {
        path: "/tables",
        title: "Table List",
        rtlTitle: "?????????? ????????????",
        icon: "icon-puzzle-10",
        class: ""
    },
    {
        path: "/typography",
        title: "Typography",
        rtlTitle: "??????????",
        icon: "icon-align-center",
        class: ""
    }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-sidebar",
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
 =========================================================
 * Black Dashboard Angular - v1.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard-angular
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map