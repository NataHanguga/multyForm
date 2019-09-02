(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./student/student.module": "./src/app/student/student.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main\">\n  <div class=\"wrapper\">\n     <p-toolbar class=\"ui-g-12 \"> -->\n      <!-- <h3 class=\"ui-g-4\">Multi step form</h3> -->\n      <!-- <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\"></p-steps> -->\n    <!-- </p-toolbar> -->\n    <!-- <app-multi-form></app-multi-form> \n  </div>\n</div> -->\n\n<!-- <app-editor></app-editor> -->\n<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/address/address.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/address/address.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  [formGroup]=\"address\"\n  class=\"ui-grid ui-grid-responsive ui-fluid\"\n>\n  <div class=\"input\">\n    <label for=\"street\">Street: </label>\n    <input\n      type=\"text\"\n      pInputText\n      autocomplete=\"off\"\n      #street\n      required\n      pattern=\"^[a-zA-Z -]{2,15}$\"\n      [(ngModel)]=\"streetValue\"\n      formControlName=\"street\"\n    />\n  </div>\n  <div class=\"input\">\n    <label for=\"city\">City: </label>\n    <input\n      type=\"text\"\n      #city\n      pInputText\n      autocomplete=\"off\"\n      required\n      pattern=\"^[a-zA-Z -]{2,15}$\"\n      [(ngModel)]=\"cityValue\"\n      formControlName=\"city\"\n    />\n  </div>\n  <div class=\"input\">\n    <label for=\"state\">State: </label>\n    <input\n      type=\"text\"\n      #state\n      pInputText\n      required\n      pattern=\"^[a-zA-Z -]{2,15}$\"\n      autocomplete=\"off\"\n      [(ngModel)]=\"stateValue\"\n      formControlName=\"state\"\n    />\n  </div>\n  <div class=\"buttons\">\n    <button\n      pButton\n      type=\"button\"\n      label=\"Back\"\n      [routerLink]=\"['']\"\n      routerLinkActive=\"router-link-active\"\n      class=\"ui-button-info ui-g-12 ui-md-6 ui-lg-3\"\n    ></button>\n    <button\n      pButton\n      type=\"button\"\n      label=\"Next\"\n      class=\"ui-button-success ui-g-12 ui-md-6 ui-lg-3\"\n      [disabled]=\"address.invalid\"\n      [routerLink]=\"['/phone']\"\n      routerLinkActive=\"router-link-active\"\n      (click)=\"show()\"\n    ></button>\n\n    <p-message\n      severity=\"error\"\n      text=\"Street is not required\"\n      *ngIf=\"\n        address.controls['street'].invalid && address.controls['street'].touched\n      \"\n    ></p-message>\n    <p-message\n      severity=\"error\"\n      text=\"City is not required\"\n      *ngIf=\"\n        address.controls['city'].invalid && address.controls['city'].touched\n      \"\n    ></p-message>\n    <p-message\n      severity=\"error\"\n      text=\"State is not required\"\n      *ngIf=\"\n        address.controls['state'].invalid && address.controls['state'].touched\n      \"\n    ></p-message>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/editor/editor.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/editor/editor.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Custom Toolbar</h3>\n<p-editor [(ngModel)]=\"title\" class=\"custom_selection\" [style]=\"{ height: '320px' }\">\n  <p-header>\n    <span class=\"ql-formats\">\n      <button class=\"ql-bold\" aria-label=\"Bold\"></button>\n      <button class=\"ql-italic\" aria-label=\"Italic\"></button>\n      <button class=\"ql-underline\" aria-label=\"Underline\"></button>\n    </span>\n  </p-header>\n</p-editor>\n<p class=\"custom_selection\">Value: {{ title || \"empty\" }}</p>\n\n<button\n  pButton\n  type=\"button\"\n  label=\"Clear\"\n  icon=\"pi pi-times\"\n  (click)=\"title = null\"\n></button>\n<div\n  class=\"custom_selection\"\n  contenteditable=\"true\"\n  ngDefaultControl\n  [(ngModel)]=\"title\"\n>\n  {{ title }}\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/full-name/full-name.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/full-name/full-name.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"fullName\" class=\"ui-grid ui-grid-responsive ui-fluid\">\n  <div class=\"input\">\n    <label for=\"firstName\">First Name</label>\n    <input\n      type=\"text\"\n      id=\"firstName\"\n      pInputText\n      autocomplete=\"off\"\n      required\n      [(ngModel)]=\"firstNameValue\"\n      formControlName=\"firstName\"\n      pattern=\"^[a-zA-Z_-]{3,15}$\"\n    />\n  </div>\n  <div class=\"input\">\n    <label for=\"secondName\">Second Name</label>\n    <input\n      type=\"text\"\n      id=\"secondName\"\n      pInputText\n      autocomplete=\"off\"\n      [(ngModel)]=\"secondNameValue\"\n      formControlName=\"secondName\"\n      pattern=\"^[a-zA-Z_-]{3,15}$\"\n      required\n    />\n  </div>\n  <div class=\"input\">\n    <label>\n      <input\n        type=\"file\"\n        #inputFile\n        id=\"inputFile\"\n        accept=\"image/*\"\n        (change)=\"onFileChange($event)\"\n      />\n    </label>\n    <button\n      pButton\n      type=\"button\"\n      label=\"Choose file\"\n      class=\"ui-button-info \"\n      (click)=\"inputFile.click()\"\n    ></button>\n  </div>\n  <div class=\"buttons \">\n    <!-- <button\n      pButton\n      type=\"button\"\n      label=\"Cancel\"\n      class=\"ui-button-secondary ui-g-12 ui-md-6 ui-lg-3\"\n      (click)=\"cancelButton()\"\n    ></button> -->\n    <button\n      pButton\n      type=\"button\"\n      label=\"Next\"\n      class=\"ui-button-success ui-g-12 ui-md-6 ui-lg-3\"\n      [disabled]=\"fullName.invalid\"\n      [routerLink]=\"['../address']\"\n      routerLinkActive=\"router-link-active\"\n      (click)=\"show()\"\n    ></button>\n    <div class=\"error\">\n      <p-message\n        severity=\"error\"\n        text=\"First Name is not required\"\n        *ngIf=\"\n          fullName.controls['firstName'].invalid &&\n          fullName.controls['firstName'].touched\n        \"\n      ></p-message>\n      <p-message\n        severity=\"error\"\n        text=\"Second Name is not required\"\n        *ngIf=\"\n          fullName.controls['secondName'].invalid &&\n          fullName.controls['secondName'].touched\n        \"\n      ></p-message>\n      <p-message\n        severity=\"success\"\n        text=\"Image loaded\"\n        *ngIf=\"fullName.controls['image'].valid\"\n      ></p-message>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/multi-form/multi-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/multi-form/multi-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/phone/phone.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/phone/phone.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"phoneNumber\" class=\"ui-grid ui-grid-responsive ui-fluid\">\n  <div class=\"input\">\n    <label for=\"phone\">Phone Number: </label>\n    <input\n      type=\"phone\"\n      #number\n      pInputText\n      required\n      autocomplete=\"off\"\n      pattern=\"^[0-9]{5,8}$\"\n      [(ngModel)]=\"numberValue\"\n      formControlName=\"number\"\n    />\n  </div>\n  <div class=\"buttons\">\n    <button\n      [routerLink]=\"['/address']\"\n      routerLinkActive=\"router-link-active\"\n      pButton\n      type=\"button\"\n      label=\"Back\"\n      class=\"ui-button-info ui-g-12 ui-md-6 ui-lg-3\"\n    ></button>\n    <button\n      pButton\n      type=\"button\"\n      label=\"Complete\"\n      class=\"ui-button-success ui-g-12 ui-md-6 ui-lg-3\"\n      [disabled]=\"phoneNumber.invalid\"\n      [routerLink]=\"['/result']\"\n      routerLinkActive=\"router-link-active\"\n      (click)=\"show()\"\n    ></button>\n    <p-message\n      severity=\"error\"\n      text=\"Phone Number is not required\"\n      *ngIf=\"\n        phoneNumber.controls['number'].invalid &&\n        phoneNumber.controls['number'].touched\n      \"\n    ></p-message>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/result/result.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/result/result.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"info\"></div>\n<button\n  [routerLink]=\"['/']\"\n  routerLinkActive=\"router-link-active\"\n  (click)=\"reset()\"\n>\n  restert\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toolbar>\n  <!-- <div class=\"ui-toolbar\"> -->\n    <div class=\"ui-toolbar-group-right\">\n      <h3>Header</h3>\n    </div>\n  <!-- </div> -->\n</p-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/components/create-student/create-student.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/components/create-student/create-student.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-button \n  icon=\"pi pi-arrow-left\" \n  class=\"ui-button-info\" \n  [routerLink]=\"['/']\"\n  routerLinkActive=\"router-link-active\"\n></p-button> -->\n<button type=\"button\" (click)=\"display = true\" pButton icon=\"pi pi-info-circle\" icon=\"pi pi-plus\" class=\"but\"></button>\n\n<p-dialog  [(visible)]=\"display\" [modal]=\"true\" [baseZIndex]=\"10000\" header=\"Create new user\">\n  <div class=\"wrapper\">\n    <form [formGroup]=\"teacherForm\">\n      <div class=\"row\">\n\n          <span class=\"ui-float-label\">\n              <input \n                id=\"float-input\" \n                type=\"text\" \n                size=\"37\"\n                name=\"teacherName\" \n                id=\"teacherName\" \n                formControlName=\"teacherName\" \n                autocomplete=\"off\" \n                required \n                pInputText> \n              <label for=\"float-input\">Teacher Full Name</label>\n          </span>\n      </div>\n      <div class=\"row\">\n        <!-- <p-button \n          icon=\"pi pi-plus\" \n          id=\"add-subject\" \n          class=\"ui-grid-col-2\"\n          (click)=\"addNewStudent()\" \n          styleClass=\"ui-button-secondary\"\n          label=\"Add student\"\n        ></p-button> -->\n        <button \n        pButton \n        label=\"Cancel\" \n        (click)=\"cancel()\" \n        class=\"ui-button-secondary\"\n        >\n      </button>\n        <button \n          label=\"Save\" \n          pButton \n          (click)=\"save(teacherForm)\" \n          class=\"ui-button-success\"\n         >\n        </button>\n      </div>\n      <!-- <div formArrayName=\"students\">\n        <div\n          *ngFor=\"let student of teacherForm.controls; let i = index\">\n          <div class=\"ui-grid-row\">\n            <span class=\"ui-grid-col-2\"><b>Student {{ i + 1 }}</b></span>\n            <p-button \n              (click)=\"removeSubject(i)\" \n              class=\"ui-grid-col-2\"\n              styleClass=\"ui-button-danger\" \n              label=\"Delete student {{ i + 1 }}\">\n            </p-button>\n          </div>\n\n          <div [formGroupName]=\"i\">\n            <div class=\"ui-grid-row\">\n              <div class=\"ui-grid-col-2\">Student Full Name:</div>\n              <input \n                type=\"text\" \n                name=\"fullName\" \n                class=\"ui-grid-col-4\"\n                id=\"fullName\" \n                formControlName=\"fullName\" \n                minlength=\"2\"\n                pInputText\n                autocomplete=\"off\" \n                required />\n            </div>\n            <div class=\"ui-grid-row\">\n              <div class=\"ui-grid-col-2\">Student Class Name:</div>\n              <input \n                type=\"number\" \n                name=\"classNumber\" \n                id=\"classNumber\"\n                class=\"ui-grid-col-4\" \n                formControlName=\"classNumber\" \n                pInputText\n                min=\"1\"\n                max=\"9\"\n                autocomplete=\"off\" \n                required />\n            </div>\n            <div class=\"ui-grid-row\">\n              <div class=\"ui-grid-col-2\">Start study date:</div>\n              <input \n                type=\"date\" \n                name=\"startDate\" \n                id=\"startDate\"\n                class=\"ui-grid-col-4\" \n                formControlName=\"startDate\" \n                pInputText\n                autocomplete=\"off\" \n                required />\n            </div>\n            <div class=\"ui-grid-row\">\n              <div class=\"ui-grid-col-2\">Student Pay Type:</div>\n              <p-selectButton \n                [options]=\"types\" \n                class=\"ui-grid-col-6\" \n                #butt\n                (click)=\"butt.value === null ? \n                teacherForm.controls.students.controls[i].value.studentType = types[0].value : \n                teacherForm.controls.students.controls[i].value.studentType = butt.value\" >\n              </p-selectButton>\n            </div>\n          </div>\n        </div>\n      </div> -->\n    </form>\n  </div>\n</p-dialog>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/components/progress-table/progress-table.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/components/progress-table/progress-table.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td \n    *ngFor=\"let item of arr; let i = index;\" \n    [ngStyle]=\n        \"{'background-color':item === 50 \n            ? '#00C851' : (item === 0 ? '#cfd8dc' : '#ffbb33')}\">\n    {{item}}\n</td>\n        "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/components/show-students/show-students.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/components/show-students/show-students.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"!teacherList.length\">Empty List</div> -->\n<div class=\"ui-g-12\">\n  <!-- <p-table \n    [value]=\"teacherList\" \n    class=\"ui-grid \" \n    [paginator]=\"true\" \n    [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th style=\"width: 140px\">Teacher Name</th>\n        <th style=\"width: 1030px\">Students</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-teacher>\n      <tr>\n         <td> -->\n          <app-teacher-cell \n          class=\"ui-g-4\"\n            [teachers]=\"teacherList\" \n            (list)=\"changeList($event)\"\n            (name)=\"getStudents($event)\"\n          ></app-teacher-cell>\n       <!-- </td> -->\n        <app-student-row \n          #studentList\n          class=\"ui-g-4\"\n          (list)=\"changeList($event)\"\n        ></app-student-row>\n     <!-- </tr>\n    </ng-template>\n  </p-table> -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/components/student-row/student-row.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/components/student-row/student-row.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!studentList.length\">loading...</div>\n<p-dataView  *ngIf=\"studentList.length\" [value]=\"studentList\">\n        <p-header>\n                <div class=\"ui-helper-clearfix\"> Students </div>\n            </p-header>\n        <ng-template let-student pTemplate=\"listItem\">\n            <div>\n                {{student.fullName}}\n            </div>\n        </ng-template>\n    </p-dataView>\n    \n<!-- \n<p-table [value]=\"teacher.student\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th style=\"width: 60px\">Pay</th>\n            <th style=\"width: 180px\">Full Name</th>\n            <th style=\"width: 60px\">Class</th>\n            <th style=\"width: 90px\">PayType</th>\n            <th style=\"width: 60px\">Cashe</th>\n            <th style=\"width: 400px; max-width: 410px; min-width: 410px;\">\n                <table>\n                <tr>\n                    <th class=\"month\" \n                        *ngFor=\"let month of monthArr\" \n                        style=\"width: 40px;\">\n                        {{month}}\n                    </th>\n                    <th style=\"padding: 0; width: 40px;\" class=\"other\">Other</th>\n                </tr>\n            </table>\n            </th>\n            <th style=\"width: 180px;\">Edit/Delete</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-student *ngIf=\"teacher.student.length\">\n        <tr>\n            <td>\n                <span *ngIf=\"student.studentType === 'contract'\">\n                    <p-button \n                        styleClass=\"ui-button-success\" \n                        (click)=\"payNow(student, teacher.teacherName)\">\n                       \n                    </p-button>\n                </span>\n            </td>\n            <td>{{student.fullName}}</td>\n            <td>{{ student.classNumber }}</td>\n            <td>{{ student.studentType }}</td>\n            <td *ngIf=\"student.studentType === 'contract'\">\n                {{ student.payArray }}\n            </td>\n            <td *ngIf=\"student.studentType === 'beneficiary'\">-</td>\n                <app-progress-table  \n                    style=\"height: 30px; width: 100%\"\n                    [pay]=\"student.payArray\"\n                    [type]=\"student.studentType\"\n                    [startDate]=\"student.startDate\"\n                ></app-progress-table>\n            <td >\n                <p-button \n                    label=\"Delete\" \n                    styleClass=\"ui-button-danger\" \n                    (click)=\"deleteStudent(student.id, teacher.teacherName)\"\n                ></p-button>\n                <p-button \n                    label=\"Edit\" \n                    (click)=\"editStudent(teacher, student)\"\n                    styleClass=\"ui-button-warning\"\n                ></p-button>\n            </td>\n        </tr>\n    </ng-template>\n</p-table>\n\n\n<p-dialog header=\"Pay by {{studentItem?.fullName}}\" [(visible)]=\"display\">\n    <div class=\"ui-grid-row ui-grid-col\" >\n        <div class=\"ui-grid-col-6\">Student Pay:</div>\n        <input \n            type=\"number\" \n            class=\"ui-grid-col-6\" \n            id=\"pay\" #pay \n            min=\"1\"\n            max=\"450\"\n            pInputText\n            autocomplete=\"off\" \n            required />\n        <p-button class=\"ui-grid-col-6\" label=\"Pay\" (click)=\"save(pay.value)\" ></p-button>\n    </div>\n</p-dialog>\n\n\n<p-dialog header=\"Edit student {{studentItem?.fullName}}\" [(visible)]=\"displayEdit\">\n        <div>\n                <div class=\"ui-grid-row-12\">\n                  <div class=\"ui-grid-col-6\">Student Full Name:</div>\n                  <input \n                    type=\"text\" \n                    name=\"fullName\" \n                    class=\"ui-grid-col-6\" \n                    id=\"fullName\"\n                   [(ngModel)]=\"fullName\"\n                    minlength=\"2\"\n                    pInputText \n                    autocomplete=\"off\" \n                    required />\n                </div>\n                <div class=\"ui-grid-row\">\n                  <div class=\"ui-grid-col-6\">Student Class Name:</div>\n                  <input \n                    type=\"number\" \n                    name=\"classNumber\" \n                    id=\"classNumber\"\n                    class=\"ui-grid-col-6\" \n                    [(ngModel)]=\"classNumber\" \n                    pInputText\n                    min=\"1\"\n                    max=\"9\"\n                    autocomplete=\"off\" \n                    required />\n                </div>\n                <div class=\"ui-grid-row\">\n                  <div class=\"ui-grid-col-6\">Start study date:</div>\n                  <input \n                    type=\"date\" \n                    name=\"startDate\" \n                    id=\"startDate\" \n                    class=\"ui-grid-col-6\"\n                   [(ngModel)]=\"date\"\n                    pInputText \n                    autocomplete=\"off\" \n                    required />\n                </div>\n                  <div class=\"ui-grid-row\">\n                    <button (click)=\"cancel()\">Cancel</button>\n                    <button (click)=\"saveEditStudent()\" >Edit</button>\n                  </div>\n              </div>\n</p-dialog> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/components/student/student.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/components/student/student.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-show-students></app-show-students>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/components/teacher-cell/teacher-cell.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/components/teacher-cell/teacher-cell.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dataView [value]=\"teachers\">\n    <p-header>\n        <div class=\" wrapper\"> \n            <span>Teachers</span>  \n            <span>\n                <app-create-student></app-create-student>\n            </span>\n\n        </div>\n    </p-header>\n    <ng-template let-teacher pTemplate=\"listItem\">\n        <div class=\"wrapper\">\n            <span (click)=\"showTeacherChildren(teacher.teacherName)\">  {{teacher.teacherName}}   </span>\n            <span class=\"button-wrapper\">\n                <button pButton\n                    class=\"ui-button-text ui-button\" \n                    icon=\"pi pi-plus\"\n                    (click)=\"addStudent(teacher.teacherName)\"\n                ></button>\n                <button pButton\n                    class=\"ui-button-text ui-button\" \n                    icon=\"pi pi-pencil\"\n                    (click)=\"editTeacher(teacher)\"\n                ></button>\n                <button pButton \n                    icon=\"pi pi-trash\"                    \n                    class=\"ui-button-text ui-button\"  \n                    (click)=\"deleteTeacher(teacher)\"\n                ></button>\n            </span>\n        </div>\n    </ng-template>\n</p-dataView>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <td class=\"ui-grid-col\"> -->\n<!-- {{ teacher.teacherName }}<br> -->\n<!-- <button pButton\n        class=\"ui-button-text ui-button-success ui-button\" \n        label=\"Add student\" \n        (click)=\"addStudent(teacher.teacherName)\"\n    ></button>\n    <button pButton\n        class=\"ui-button-text ui-button-warning ui-button\" \n        label=\"Edit teacher\" \n        (click)=\"editTeacher(teacher)\"\n    ></button>\n    <button pButton \n        label=\"Delete teacher\"\n        class=\"ui-button-text ui-button-danger ui-button\"  \n        (click)=\"deleteTeacher(teacher)\"\n    ></button> -->\n<!-- </td> -->\n\n<!-- edit teacherName -->\n\n<p-dialog header=\"Edit teacher Name\" [(visible)]=\"display\">\n    <div class=\"ui-grid-row-12\">\n        <div class=\"ui-grid-col-6\">Teacher Full Name:</div>\n        <input type=\"text\" class=\"ui-grid-col-6\" [(ngModel)]=\"teacherItem\"\n            minlength=\"2\" pInputText autocomplete=\"off\" required />\n    </div>\n    <div class=\"ui-grid-row\">\n        <button (click)=\"display = false;\">Cancel</button>\n        <button (click)=\"saveEditTeacherName()\">Save</button>\n    </div>\n</p-dialog>\n\n<!-- edit teacherName -->\n\n<!-- add sudent by teacher -->\n\n<p-dialog header=\"Title\" [(visible)]=\"displayAdd\">\n    <div [formGroup]=\"student\">\n        <div class=\"ui-grid-row-12\">\n        <div class=\"ui-grid-col-6\">Student Full Name:</div>\n        <input \n            type=\"text\" \n            name=\"fullName\" \n            class=\"ui-grid-col-6\" \n            id=\"fullName\"\n            formControlName=\"fullName\" \n            minlength=\"2\"\n            pInputText \n            autocomplete=\"off\" \n            required />\n        </div>\n        <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-6\">Student Class Name:</div>\n        <input \n            type=\"number\" \n            name=\"classNumber\" \n            id=\"classNumber\"\n            class=\"ui-grid-col-6\" \n            formControlName=\"classNumber\" \n            pInputText\n            min=\"1\"\n            max=\"9\"\n            autocomplete=\"off\" \n            required />\n        </div>\n        <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-6\">Start study date:</div>\n        <input \n            type=\"date\" \n            name=\"startDate\" \n            id=\"startDate\" \n            class=\"ui-grid-col-6\"\n            formControlName=\"startDate\" \n            pInputText \n            autocomplete=\"off\" \n            required />\n        </div>\n        <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-6\">Student Pay Type:</div>\n        <p-selectButton \n            [options]=\"types\" \n            class=\"ui-grid-col-6\" \n            #butt \n            (click)=\"changeStudentType(student, butt.value)\">\n        </p-selectButton>\n        </div>\n        <div class=\"ui-grid-row\">\n            <button (click)=\"displayAdd = false; student.reset();\">Cancel</button>\n            <button \n            (click)=\"saveNewStudent(student.value)\" \n            [disabled]=\"student.invalid\">\n            Save</button>\n        </div>\n    </div>\n</p-dialog> \n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'student',
        loadChildren: './student/student.module#StudentModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.wrapper {\n  margin: 10% 20%;\n  padding: 10px 0;\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGEv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvbXVsdHlGb3JtL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYud3JhcHBlciB7XG4gICAgbWFyZ2luOiAxMCUgMjAlO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuIiwiZGl2LndyYXBwZXIge1xuICBtYXJnaW46IDEwJSAyMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/multi-form.service */ "./src/app/services/multi-form.service.ts");



let AppComponent = class AppComponent {
    constructor(service) {
        this.service = service;
        this.title = 'MultyForm';
        this.activeIndex = 0;
    }
    ngOnInit() {
        this.items = [
            { label: 'Full Name' },
            { label: 'Address' },
            { label: 'Phone Number' }
        ];
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__["MultiFormService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__["MultiFormService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_address_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/address/address.component */ "./src/app/components/address/address.component.ts");
/* harmony import */ var _components_phone_phone_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/phone/phone.component */ "./src/app/components/phone/phone.component.ts");
/* harmony import */ var _components_full_name_full_name_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/full-name/full-name.component */ "./src/app/components/full-name/full-name.component.ts");
/* harmony import */ var _components_multi_form_multi_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/multi-form/multi-form.component */ "./src/app/components/multi-form/multi-form.component.ts");
/* harmony import */ var _components_result_result_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/result/result.component */ "./src/app/components/result/result.component.ts");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");
/* harmony import */ var _student_student_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./student/student.module */ "./src/app/student/student.module.ts");
/* harmony import */ var _prime_prime_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./prime/prime.module */ "./src/app/prime/prime.module.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _student_student_module__WEBPACK_IMPORTED_MODULE_13__["StudentModule"],
            _prime_prime_module__WEBPACK_IMPORTED_MODULE_14__["PrimeModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_address_address_component__WEBPACK_IMPORTED_MODULE_7__["AddressComponent"],
            _components_phone_phone_component__WEBPACK_IMPORTED_MODULE_8__["PhoneComponent"],
            _components_full_name_full_name_component__WEBPACK_IMPORTED_MODULE_9__["FullNameComponent"],
            _components_multi_form_multi_form_component__WEBPACK_IMPORTED_MODULE_10__["MultiFormComponent"],
            _components_result_result_component__WEBPACK_IMPORTED_MODULE_11__["ResultComponent"],
            _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__["EditorComponent"],
            _layout_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/address/address.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/address/address.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin: 10px 0;\n}\n\n.buttons {\n  margin: 10px 10px;\n  width: 100%;\n}\n\n.buttons button {\n  width: 48%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGEv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvbXVsdHlGb3JtL3NyYy9hcHAvY29tcG9uZW50cy9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4uYnV0dG9uc3tcbiAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgICB3aWR0aDogNDglO1xufSIsImlucHV0IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9ucyBidXR0b24ge1xuICB3aWR0aDogNDglO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/address/address.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/address/address.component.ts ***!
  \*********************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/multi-form.service */ "./src/app/services/multi-form.service.ts");



let AddressComponent = class AddressComponent {
    constructor(service) {
        this.service = service;
        this.address = this.service.address;
    }
    ngOnInit() {
        const written = this.service.getData();
        const data = (this.service.getAddress()).value;
        if (written !== null && written === 'address') {
            this.address = this.service.getAddress();
        }
        else {
            this.address = this.service.address;
        }
        this.streetValue = data.street;
        this.cityValue = data.city;
        this.stateValue = data.state;
    }
    show() {
        this.service.setAddress(this.address);
    }
};
AddressComponent.ctorParameters = () => [
    { type: src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__["MultiFormService"] }
];
AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: __webpack_require__(/*! raw-loader!./address.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/address/address.component.html"),
        styles: [__webpack_require__(/*! ./address.component.scss */ "./src/app/components/address/address.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__["MultiFormService"]])
], AddressComponent);



/***/ }),

/***/ "./src/app/components/editor/editor.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom_selection::-moz-selection {\n  background-color: #2046c4;\n  color: #f2f2f2;\n}\n.custom_selection::selection {\n  background-color: #2046c4;\n  color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGEv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvbXVsdHlGb3JtL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNDSjtBREhBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tX3NlbGVjdGlvbjo6c2VsZWN0aW9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDQ2YzQ7XG4gICAgY29sb3I6ICNmMmYyZjI7XG59IiwiLmN1c3RvbV9zZWxlY3Rpb246OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDQ2YzQ7XG4gIGNvbG9yOiAjZjJmMmYyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditorComponent = class EditorComponent {
    constructor() {
        this.title = 'Hello my darling friend))';
    }
    ngOnInit() {
    }
};
EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editor',
        template: __webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/editor/editor.component.html"),
        styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/components/editor/editor.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EditorComponent);



/***/ }),

/***/ "./src/app/components/full-name/full-name.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/full-name/full-name.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin: 10px 0;\n}\n\n#inputFile {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGEv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvbXVsdHlGb3JtL3NyYy9hcHAvY29tcG9uZW50cy9mdWxsLW5hbWUvZnVsbC1uYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Z1bGwtbmFtZS9mdWxsLW5hbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Z1bGwtbmFtZS9mdWxsLW5hbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbiNpbnB1dEZpbGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi8vIC5idXR0b25ze1xuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vIH1cblxuIiwiaW5wdXQge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuI2lucHV0RmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/full-name/full-name.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/full-name/full-name.component.ts ***!
  \*************************************************************/
/*! exports provided: FullNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullNameComponent", function() { return FullNameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/multi-form.service */ "./src/app/services/multi-form.service.ts");



let FullNameComponent = class FullNameComponent {
    constructor(service) {
        this.service = service;
        this.fullName = this.service.fullName;
    }
    ngOnInit() {
        const written = this.service.getData();
        const data = this.service.getfullName().value;
        if (written !== null && written === 'fullName') {
            this.fullName = this.service.getfullName();
        }
        else {
            this.fullName = this.service.fullName;
        }
        this.firstNameValue = data.firstName;
        this.secondNameValue = data.secondName;
    }
    show() {
        this.service.setFullName(this.fullName);
    }
    onFileChange(event) {
        const files = event.target.files;
        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = (e) => {
                this.url = e.target.result;
                console.log(e);
                this.fullName.get('image').setValue(this.url);
                console.log(files, this.fullName.value);
            };
        }
    }
};
FullNameComponent.ctorParameters = () => [
    { type: src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__["MultiFormService"] }
];
FullNameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-full-name',
        template: __webpack_require__(/*! raw-loader!./full-name.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/full-name/full-name.component.html"),
        styles: [__webpack_require__(/*! ./full-name.component.scss */ "./src/app/components/full-name/full-name.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__["MultiFormService"]])
], FullNameComponent);



/***/ }),

/***/ "./src/app/components/multi-form/multi-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/multi-form/multi-form.component.ts ***!
  \***************************************************************/
/*! exports provided: MultiFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFormComponent", function() { return MultiFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MultiFormComponent = class MultiFormComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.navigateByUrl('/');
    }
};
MultiFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MultiFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multi-form',
        template: __webpack_require__(/*! raw-loader!./multi-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/multi-form/multi-form.component.html")
        // styleUrls: ['./multi-form.component.scss']
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MultiFormComponent);



/***/ }),

/***/ "./src/app/components/phone/phone.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/phone/phone.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin: 10px 0;\n}\n\n.buttons {\n  margin: 10px 10px;\n  width: 100%;\n}\n\n.buttons button {\n  width: 48%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGEv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvbXVsdHlGb3JtL3NyYy9hcHAvY29tcG9uZW50cy9waG9uZS9waG9uZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9waG9uZS9waG9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENBO0VBQ0ksVUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZS9waG9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuLmJ1dHRvbnN7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b25zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDQ4JTtcbn0iLCJpbnB1dCB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbjogMTBweCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IDQ4JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/phone/phone.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/phone/phone.component.ts ***!
  \*****************************************************/
/*! exports provided: PhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneComponent", function() { return PhoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/multi-form.service */ "./src/app/services/multi-form.service.ts");



let PhoneComponent = class PhoneComponent {
    constructor(service) {
        this.service = service;
        this.phoneNumber = this.service.phoneNumber;
    }
    ngOnInit() {
        const written = this.service.getData();
        const data = this.service.getPhone().value;
        if (written !== null && written === 'phone') {
            this.phoneNumber = this.service.getPhone();
        }
        else {
            this.phoneNumber = this.service.phoneNumber;
        }
        this.numberValue = data.phoneNumber;
    }
    show() {
        this.service.setPhone(this.phoneNumber);
    }
};
PhoneComponent.ctorParameters = () => [
    { type: src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__["MultiFormService"] }
];
PhoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phone',
        template: __webpack_require__(/*! raw-loader!./phone.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/phone/phone.component.html"),
        styles: [__webpack_require__(/*! ./phone.component.scss */ "./src/app/components/phone/phone.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__["MultiFormService"]])
], PhoneComponent);



/***/ }),

/***/ "./src/app/components/result/result.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/result/result.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#img {\n  max-height: 200px;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGEv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvbXVsdHlGb3JtL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1ne1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59IiwiI2ltZyB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/result/result.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/result/result.component.ts ***!
  \*******************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/multi-form.service */ "./src/app/services/multi-form.service.ts");



let ResultComponent = class ResultComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.complete();
    }
    reset() {
        this.service.reset();
    }
};
ResultComponent.ctorParameters = () => [
    { type: src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__["MultiFormService"] }
];
ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result',
        template: __webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/result/result.component.html"),
        styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/components/result/result.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_multi_form_service__WEBPACK_IMPORTED_MODULE_2__["MultiFormService"]])
], ResultComponent);



/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/prime/prime.module.ts":
/*!***************************************!*\
  !*** ./src/app/prime/prime.module.ts ***!
  \***************************************/
/*! exports provided: PrimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeModule", function() { return PrimeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/toolbar.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/steps */ "./node_modules/primeng/steps.js");
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_steps__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/editor */ "./node_modules/primeng/editor.js");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_16__);

















let PrimeModule = class PrimeModule {
};
PrimeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            primeng_toast__WEBPACK_IMPORTED_MODULE_2__["ToastModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"],
            primeng_steps__WEBPACK_IMPORTED_MODULE_6__["StepsModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_7__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_8__["MessageModule"],
            primeng_editor__WEBPACK_IMPORTED_MODULE_9__["EditorModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataViewModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"],
            primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__["SelectButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_14__["ProgressBarModule"],
            primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_15__["OverlayPanelModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_16__["AccordionModule"]
        ],
        exports: [
            primeng_toast__WEBPACK_IMPORTED_MODULE_2__["ToastModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"],
            primeng_steps__WEBPACK_IMPORTED_MODULE_6__["StepsModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_7__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_8__["MessageModule"],
            primeng_editor__WEBPACK_IMPORTED_MODULE_9__["EditorModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataViewModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"],
            primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__["SelectButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_14__["ProgressBarModule"],
            primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_15__["OverlayPanelModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_16__["AccordionModule"]
        ]
    })
], PrimeModule);



/***/ }),

/***/ "./src/app/services/multi-form.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/multi-form.service.ts ***!
  \************************************************/
/*! exports provided: MultiFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFormService", function() { return MultiFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let MultiFormService = class MultiFormService {
    constructor(fb) {
        this.fb = fb;
        this.fullName = this.fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(`^[a-zA-Z_-]{3,15}$`)
            ])),
            secondName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(`^[a-zA-Z_-]{3,15}$`)
            ])),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.address = this.fb.group({
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(`^[a-zA-Z -]{2,15}$`)
            ])),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(`^[a-zA-Z -]{2,15}$`)
            ])),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(`^[a-zA-Z -]{2,15}$`)
            ]))
        });
        this.phoneNumber = this.fb.group({
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(`^[0-9]{5,8}$`)
            ]))
        });
        this.multyForm = this.fb.group({
            fulName: this.fullName.value,
            address: this.address.value,
            phone: this.phoneNumber.value
        });
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    setFullName(data) {
        this.fullName = data;
        this.multyForm.value.fulName = data;
        this.subject.next('fullName');
    }
    getData() {
        const data = this.subject.value;
        if (data === 'fullName') {
            return 'fullName';
        }
        else if (data === 'address') {
            return 'address';
        }
        else if (data === 'phone') {
            return 'phone';
        }
        else {
            return null;
        }
    }
    getfullName() {
        return this.fullName;
    }
    setAddress(data) {
        this.address = data;
        this.multyForm.value.address = this.address;
        this.subject.next('address');
    }
    getAddress() {
        return this.address;
    }
    setPhone(data) {
        this.phoneNumber = data;
        this.multyForm.value.phone = this.phoneNumber;
    }
    getPhone() {
        return this.phoneNumber;
    }
    getFullData() {
        return this.multyForm.value;
    }
    // onFileChange(event, url: string): void {
    //   const files = event.target.files;
    //   if (files && files[0]) {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(files[0]);
    //     reader.onload = (e: any) => {
    //       url = e.target.result;
    //     };
    //   }
    //   this.fullName.get('image').setValue(url);
    //   console.log(files, this.fullName.value);
    // }
    reset() {
        this.multyForm.reset();
        this.phoneNumber.reset();
        this.address.reset();
        this.fullName.reset();
        this.subject.next(null);
    }
    complete() {
        document.getElementById('info').innerHTML =
            '<div> Full Name: ' +
                this.fullName.value.firstName +
                ' ' +
                this.fullName.value.secondName +
                '</div><div> Address: ' +
                this.address.value.street +
                ' St, ' +
                this.address.value.city +
                ', ' +
                this.address.value.state +
                '</div><div> Phone Number: +' +
                this.phoneNumber.value.number +
                '</div><div><img id="img" src="' + this.fullName.value.image + '"</div>';
    }
};
MultiFormService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
MultiFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], MultiFormService);



/***/ }),

/***/ "./src/app/student/components/create-student/create-student.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/student/components/create-student/create-student.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-dialog.ui-widget-content {\n  background-color: red;\n}\n\nbutton.ui-button.but {\n  background-color: rgba(206, 198, 206, 0) !important;\n  border: none;\n  color: #000 !important;\n}\n\n.wrapper {\n  display: flex;\n  width: 300px;\n  height: 120px;\n  flex-direction: column;\n}\n\n.wrapper .row {\n  display: flex;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.wrapper .row #float-input {\n  height: 25px;\n}\n\n.wrapper .row div.col {\n  width: 40%;\n}\n\n.wrapper .row input.col {\n  width: 60%;\n}\n\n.wrapper .row button {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGEv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvbXVsdHlGb3JtL3NyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL2NyZWF0ZS1zdHVkZW50L2NyZWF0ZS1zdHVkZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvY3JlYXRlLXN0dWRlbnQvY3JlYXRlLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksbURBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQUo7O0FERUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQVI7O0FEQ087RUFDSSxZQUFBO0FDQ1g7O0FEQ1E7RUFDSSxVQUFBO0FDQ1o7O0FEQ1E7RUFDSSxVQUFBO0FDQ1o7O0FERVE7RUFDSSxVQUFBO0FDQVoiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvY3JlYXRlLXN0dWRlbnQvY3JlYXRlLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLnVpLWRpYWxvZy51aS13aWRnZXQtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5idXR0b24udWktYnV0dG9uLmJ1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDYsIDE5OCwgMjA2LCAwKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4ud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICNmbG9hdC1pbnB1dCB7XG4gICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICB9XG4gICAgICAgIGRpdi5jb2wge1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dC5jb2wge1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuXG4gICAgICAgICAgICAmLnVpLWJ1dHRvbi1zZWNvbmRhcnkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnVpLWRpYWxvZy51aS13aWRnZXQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuYnV0dG9uLnVpLWJ1dHRvbi5idXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMTk4LCAyMDYsIDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ud3JhcHBlciAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ud3JhcHBlciAucm93ICNmbG9hdC1pbnB1dCB7XG4gIGhlaWdodDogMjVweDtcbn1cbi53cmFwcGVyIC5yb3cgZGl2LmNvbCB7XG4gIHdpZHRoOiA0MCU7XG59XG4ud3JhcHBlciAucm93IGlucHV0LmNvbCB7XG4gIHdpZHRoOiA2MCU7XG59XG4ud3JhcHBlciAucm93IGJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/student/components/create-student/create-student.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/student/components/create-student/create-student.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStudentComponent", function() { return CreateStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/student.service */ "./src/app/student/services/student.service.ts");



let CreateStudentComponent = class CreateStudentComponent {
    constructor(studentService) {
        this.studentService = studentService;
        this.teacherForm = this.studentService.teacherForm;
        this.students = this.studentService.initialSubject();
        this.display = false;
        this.types = [
            { label: 'Contract', value: 'contract' },
            { label: 'Beneficiary', value: 'beneficiary' }
        ];
    }
    ngOnInit() {
        this.teacherForm.reset();
    }
    addNewStudent() {
        this.studentService.addStudent();
    }
    removeSubject(i) {
        this.studentService.removeSubject(i);
    }
    save(data) {
        this.studentService.saveStudent(data);
        this.cancel();
    }
    cancel() {
        this.display = false;
        this.teacherForm.reset();
    }
};
CreateStudentComponent.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"] }
];
CreateStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-student',
        template: __webpack_require__(/*! raw-loader!./create-student.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/components/create-student/create-student.component.html"),
        styles: [__webpack_require__(/*! ./create-student.component.scss */ "./src/app/student/components/create-student/create-student.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
], CreateStudentComponent);



/***/ }),

/***/ "./src/app/student/components/progress-table/progress-table.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/student/components/progress-table/progress-table.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n  text-align: center;\n  width: 44px;\n  height: 47px;\n  font-size: 15px;\n  padding: 2px 0;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGEv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvbXVsdHlGb3JtL3NyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3Byb2dyZXNzLXRhYmxlL3Byb2dyZXNzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvcHJvZ3Jlc3MtdGFibGUvcHJvZ3Jlc3MtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvcHJvZ3Jlc3MtdGFibGUvcHJvZ3Jlc3MtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDRweDsgXG4gICAgaGVpZ2h0OiA0N3B4OyBcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMnB4IDA7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn0iLCJ0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDdweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAycHggMDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/student/components/progress-table/progress-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/student/components/progress-table/progress-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProgressTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressTableComponent", function() { return ProgressTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressTableComponent = class ProgressTableComponent {
    constructor() {
        this.arr = [];
        this.PAY = 50;
    }
    ngOnInit() {
        // console.log(this.pay, this.type);
        this.creatreArray();
    }
    creatreArray() {
        const date = new Date(this.startDate).getMonth();
        console.log(date, this.startDate);
        if (date >= 5 && date <= 8) {
            for (let i = 0; i < 8; i++) {
                if (this.type === 'contract') {
                    if (this.pay >= this.PAY) {
                        this.arr.push(this.PAY);
                        this.pay -= this.PAY;
                    }
                    else if (this.pay < this.PAY) {
                        this.arr.push(this.pay);
                        this.pay = 0;
                    }
                    else if (this.pay === 0) {
                        this.arr.push(0);
                    }
                }
                else {
                    this.arr.push(50);
                }
            }
            if (this.pay > 0) {
                console.log(this.pay);
                this.arr.push(this.pay);
            }
            else {
                this.arr.push(0);
            }
        }
        console.log(this.arr);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ProgressTableComponent.prototype, "pay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProgressTableComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
], ProgressTableComponent.prototype, "startDate", void 0);
ProgressTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress-table',
        template: __webpack_require__(/*! raw-loader!./progress-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/components/progress-table/progress-table.component.html"),
        styles: [__webpack_require__(/*! ./progress-table.component.scss */ "./src/app/student/components/progress-table/progress-table.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProgressTableComponent);



/***/ }),

/***/ "./src/app/student/components/show-students/show-students.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/student/components/show-students/show-students.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9zaG93LXN0dWRlbnRzL3Nob3ctc3R1ZGVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/student/components/show-students/show-students.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/student/components/show-students/show-students.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ShowStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowStudentsComponent", function() { return ShowStudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/student.service */ "./src/app/student/services/student.service.ts");
/* harmony import */ var _student_row_student_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../student-row/student-row.component */ "./src/app/student/components/student-row/student-row.component.ts");




let ShowStudentsComponent = class ShowStudentsComponent {
    constructor(studentService) {
        this.studentService = studentService;
    }
    ngOnInit() {
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        // console.log(this.teacherList);
    }
    getStudents(event) {
        console.log(event);
        this.studentList.getStudents(event);
    }
    changeSearch(data) {
        // console.log(data, typeof data);
        // let list: Teacher[] = this.teacherList.map((teacher: Teacher) => {
        //   return new Teacher(teacher.teacherName, teacher.student.filter((student: ShowStudent) => {
        //     return student.fullName.toLocaleLowerCase().includes(data);
        //   }));
        // });
        // if (!data.length) {
        //   list = this.teacherList;
        // }
        // console.log(list);
        // this.teacherList = list;
    }
    changeList(event) {
        console.log(event);
        this.teacherList = event;
    }
};
ShowStudentsComponent.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentList', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _student_row_student_row_component__WEBPACK_IMPORTED_MODULE_3__["StudentRowComponent"])
], ShowStudentsComponent.prototype, "studentList", void 0);
ShowStudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-students',
        template: __webpack_require__(/*! raw-loader!./show-students.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/components/show-students/show-students.component.html"),
        styles: [__webpack_require__(/*! ./show-students.component.scss */ "./src/app/student/components/show-students/show-students.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
], ShowStudentsComponent);



/***/ }),

/***/ "./src/app/student/components/student-row/student-row.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/student/components/student-row/student-row.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".month {\n  width: 40px;\n}\n\n.other {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGEv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvbXVsdHlGb3JtL3NyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQtcm93L3N0dWRlbnQtcm93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvc3R1ZGVudC1yb3cvc3R1ZGVudC1yb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvc3R1ZGVudC1yb3cvc3R1ZGVudC1yb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9udGgge1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4ub3RoZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIFxufSIsIi5tb250aCB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4ub3RoZXIge1xuICB3aWR0aDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/student/components/student-row/student-row.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/student/components/student-row/student-row.component.ts ***!
  \*************************************************************************/
/*! exports provided: StudentRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRowComponent", function() { return StudentRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_showStudent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/showStudent */ "./src/app/student/models/showStudent.ts");
/* harmony import */ var _models_teacher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/teacher */ "./src/app/student/models/teacher.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/student.service */ "./src/app/student/services/student.service.ts");





let StudentRowComponent = class StudentRowComponent {
    constructor(studentService) {
        this.studentService = studentService;
        this.list = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.PAY = 50;
        this.display = false;
        this.displayEdit = false;
        this.teacherItem = '';
        this.studentList = [];
        this.student = this.studentService.initialSubject();
        this.pay = this.studentService.pay;
        this.monthArr = ['Sep', 'Oct', 'Nov', 'Des', 'Feb', 'Mar', 'Apr', 'May'];
        this.fullName = '';
        this.classNumber = 0;
    }
    ngOnInit() {
    }
    // edit(teacher: string, student: Teacher) {
    // 	console.log(teacher, student);
    // 	this.studentService.saveTeacher(teacher, student);
    // }
    getStudents(name) {
        this.studentList = this.studentService.getStudentsByTeacherName(name);
        console.log(this.studentList);
    }
    editStudent(teacher, student) {
        console.log(teacher, student);
        this.displayEdit = true;
        this.studentItem = student;
        this.fullName = this.studentItem.fullName;
        this.classNumber = this.studentItem.classNumber;
        this.date = this.studentItem.startDate;
    }
    saveEditStudent() {
        console.log(this.fullName, this.classNumber, this.date);
        const editStudent = new _models_showStudent__WEBPACK_IMPORTED_MODULE_2__["ShowStudent"](this.fullName, this.classNumber, this.studentItem.studentType, this.date, this.studentItem.payArray);
        editStudent.id = this.studentItem.id;
        this.studentService.saveEditStudent(editStudent);
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        this.list.emit(this.teacherList);
        this.cancel();
    }
    cancel() {
        this.displayEdit = false;
        this.fullName = null;
        this.classNumber = null;
        this.date = null;
    }
    payNow(data, teacher) {
        this.display = true;
        this.teacherItem = teacher;
        this.studentItem = data;
        console.log(data.fullName, teacher);
    }
    deleteStudent(id, teacher) {
        this.studentService.deleteStudent(id, teacher);
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        this.list.emit(this.teacherList);
    }
    save(data) {
        console.log(data);
        this.studentService.setPayArray(this.studentItem.id, +data, this.studentItem.fullName);
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        this.list.emit(this.teacherList);
        this.display = false;
    }
};
StudentRowComponent.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_teacher__WEBPACK_IMPORTED_MODULE_3__["Teacher"])
], StudentRowComponent.prototype, "teacher", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentRowComponent.prototype, "list", void 0);
StudentRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-row',
        template: __webpack_require__(/*! raw-loader!./student-row.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/components/student-row/student-row.component.html"),
        styles: [__webpack_require__(/*! ./student-row.component.scss */ "./src/app/student/components/student-row/student-row.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]])
], StudentRowComponent);



/***/ }),

/***/ "./src/app/student/components/student/student.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/student/components/student/student.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9zdHVkZW50L3N0dWRlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/student/components/student/student.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/student/components/student/student.component.ts ***!
  \*****************************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudentComponent = class StudentComponent {
    constructor() { }
    ngOnInit() {
    }
};
StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student',
        template: __webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/components/student/student.component.html"),
        styles: [__webpack_require__(/*! ./student.component.scss */ "./src/app/student/components/student/student.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StudentComponent);



/***/ }),

/***/ "./src/app/student/components/teacher-cell/teacher-cell.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/student/components/teacher-cell/teacher-cell.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-button-text {\n  font-size: 12px;\n}\n\n.ui-button {\n  width: 115px;\n  margin-top: 5px;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.wrapper .button-wrapper button.ui-button {\n  background-color: #cec6ce !important;\n  border: none;\n  color: #000 !important;\n}\n\n.wrapper .button-wrapper button.ui-button:hover {\n  background-color: #ece;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGEv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvbXVsdHlGb3JtL3NyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3RlYWNoZXItY2VsbC90ZWFjaGVyLWNlbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy90ZWFjaGVyLWNlbGwvdGVhY2hlci1jZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERVE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0FaOztBREVZO0VBQ0ksc0JBQUE7QUNBaEIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvdGVhY2hlci1jZWxsL3RlYWNoZXItY2VsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1idXR0b24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udWktYnV0dG9ue1xuICAgIHdpZHRoOiAxMTVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgYnV0dG9uLnVpLWJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAxOTgsIDIwNikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnVpLWJ1dHRvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udWktYnV0dG9uIHtcbiAgd2lkdGg6IDExNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLndyYXBwZXIgLmJ1dHRvbi13cmFwcGVyIGJ1dHRvbi51aS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjNmNlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbi53cmFwcGVyIC5idXR0b24td3JhcHBlciBidXR0b24udWktYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/student/components/teacher-cell/teacher-cell.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/student/components/teacher-cell/teacher-cell.component.ts ***!
  \***************************************************************************/
/*! exports provided: TeacherCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherCellComponent", function() { return TeacherCellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_teacher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/teacher */ "./src/app/student/models/teacher.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/student.service */ "./src/app/student/services/student.service.ts");
/* harmony import */ var _models_showStudent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/showStudent */ "./src/app/student/models/showStudent.ts");





let TeacherCellComponent = class TeacherCellComponent {
    constructor(studentService) {
        this.studentService = studentService;
        this.list = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.name = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.teacherItem = '';
        this.student = this.studentService.initialSubject();
        this.displayAdd = false;
        this.display = false;
        this.types = [
            { label: 'Contract', value: 'contract' },
            { label: 'Beneficiary', value: 'beneficiary' }
        ];
    }
    ngOnInit() {
    }
    deleteTeacher(teacher) {
        this.studentService.deleteTeacher(teacher);
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        this.list.emit(this.teacherList);
    }
    show(data) {
        console.log(data);
    }
    addStudent(teacher) {
        this.displayAdd = true;
        this.teacherItem = teacher;
    }
    editTeacher(teacherEdit) {
        this.display = true;
        this.editTeacherItem = teacherEdit;
        this.teacherItem = teacherEdit.teacherName;
        console.log(teacherEdit, this.teacherItem, this.editTeacher);
    }
    saveEditTeacherName() {
        console.log(this.teacherItem);
        const newTeacher = new _models_teacher__WEBPACK_IMPORTED_MODULE_2__["Teacher"](this.teacherItem, this.editTeacherItem.student);
        this.studentService.saveEditTeacher(newTeacher);
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        this.list.emit(this.teacherList);
        this.display = false;
    }
    // cancel(data) {
    // 	data = false;
    //   this.student.reset();
    // }
    saveNewStudent(data) {
        this.displayAdd = false;
        this.studentService.addNewStudent(this.teacherItem, new _models_showStudent__WEBPACK_IMPORTED_MODULE_4__["ShowStudent"](data.fullName, data.classNumber, data.studentType, data.startDate, 0));
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        this.list.emit(this.teacherList);
    }
    showTeacherChildren(teacherName) {
        this.name.emit(teacherName);
    }
    changeStudentType(student, value) {
        student.studentType = value === null ?
            this.types[0].value : value;
    }
};
TeacherCellComponent.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TeacherCellComponent.prototype, "teachers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TeacherCellComponent.prototype, "list", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TeacherCellComponent.prototype, "name", void 0);
TeacherCellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teacher-cell',
        template: __webpack_require__(/*! raw-loader!./teacher-cell.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/components/teacher-cell/teacher-cell.component.html"),
        styles: [__webpack_require__(/*! ./teacher-cell.component.scss */ "./src/app/student/components/teacher-cell/teacher-cell.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]])
], TeacherCellComponent);



/***/ }),

/***/ "./src/app/student/directives/filter.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/student/directives/filter.directive.ts ***!
  \********************************************************/
/*! exports provided: FilterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDirective", function() { return FilterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterDirective = class FilterDirective {
    constructor() { }
};
FilterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appFilter]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FilterDirective);



/***/ }),

/***/ "./src/app/student/models/showStudent.ts":
/*!***********************************************!*\
  !*** ./src/app/student/models/showStudent.ts ***!
  \***********************************************/
/*! exports provided: ShowStudent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowStudent", function() { return ShowStudent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typescript-json-serializer */ "./node_modules/typescript-json-serializer/index.js");
/* harmony import */ var typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__);


let ShowStudent = class ShowStudent {
    constructor(fullName, classNumber, studentType, startDate, payArray) {
        this.fullName = fullName;
        this.classNumber = classNumber;
        this.studentType = studentType;
        this.startDate = startDate;
        this.payArray = payArray;
        this.id = Math.floor(Math.random() * (Date.now() - 5) + 5);
    }
};
ShowStudent.ctorParameters = () => [
    { type: String, decorators: [{ type: typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"] }] },
    { type: Number, decorators: [{ type: typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"] }] },
    { type: String, decorators: [{ type: typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"] }] },
    { type: Date, decorators: [{ type: typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"] }] },
    { type: Number, decorators: [{ type: typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"] }] }
];
ShowStudent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["Serializable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, Number, String, Date, Number])
], ShowStudent);



/***/ }),

/***/ "./src/app/student/models/teacher.ts":
/*!*******************************************!*\
  !*** ./src/app/student/models/teacher.ts ***!
  \*******************************************/
/*! exports provided: Teacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teacher", function() { return Teacher; });
class Teacher {
    constructor(teacherName, student) {
        this.teacherName = teacherName;
        this.student = student;
    }
}
Teacher.ctorParameters = () => [
    { type: String },
    { type: Array }
];


/***/ }),

/***/ "./src/app/student/pipes/filter.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/student/pipes/filter.pipe.ts ***!
  \**********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, search) {
        if (!items) {
            return [];
        }
        if (!search || !search.length) {
            return items;
        }
        search = search.toLocaleLowerCase();
        const data = items.forEach((teacher) => {
            return teacher.student.filter((student) => {
                return student.fullName.toLocaleLowerCase().includes(search);
            });
        });
        console.log(data);
        return data;
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/student/services/student.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/student/services/student.service.ts ***!
  \*****************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_teacher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/teacher */ "./src/app/student/models/teacher.ts");
/* harmony import */ var _models_showStudent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/showStudent */ "./src/app/student/models/showStudent.ts");





let StudentService = class StudentService {
    constructor(fb) {
        this.fb = fb;
        this.pay = this.fb.group({
            pay: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
        this.teacherForm = this.fb.group({
            teacherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            students: this.fb.array([this.initialSubject()])
        });
    }
    initialSubject() {
        return this.fb.group({
            fullName: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)
                ])
            ],
            classNumber: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9)
                ])
            ],
            studentType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            payArray: this.fb.array([this.pay])
        });
    }
    addStudent() {
        const control = this.teacherForm.controls.students;
        control.push(this.initialSubject());
    }
    removeSubject(i) {
        const control = this.teacherForm.controls.students;
        control.removeAt(i);
    }
    saveStudent(data) {
        console.log(data.value);
        const arr = data.value.students.map((el) => {
            return new _models_showStudent__WEBPACK_IMPORTED_MODULE_4__["ShowStudent"](el.fullName, el.classNumber, el.studentType, el.startDate, 0);
        });
        const teacher = new _models_teacher__WEBPACK_IMPORTED_MODULE_3__["Teacher"](data.value.teacherName, arr);
        console.log(teacher);
        this.teacherList = this.getStudentsFromLocalSrotage();
        this.teacherList.push(teacher);
        this.setStudentToLocalStorage(this.teacherList);
        return teacher.student.length;
    }
    setStudentToLocalStorage(student) {
        localStorage.setItem('studentList', JSON.stringify(student));
    }
    getStudentsFromLocalSrotage() {
        const data = localStorage.getItem('studentList');
        return data === null ? [] : JSON.parse(data);
    }
    setPayArray(id, data, name) {
        console.log(id, data, name);
        this.teacherList = this.getStudentsFromLocalSrotage();
        this.teacherList.map((teacher) => {
            teacher.student.forEach((student, i) => {
                console.log(student.id === id);
                if (student.id === id && student.fullName === name) {
                    console.log('finded');
                    student.payArray += data;
                    console.log(student);
                }
            });
        });
        console.log(this.teacherList);
        this.setStudentToLocalStorage(this.teacherList);
    }
    deleteStudent(id, teacherName) {
        this.teacherList = this.getStudentsFromLocalSrotage();
        this.teacherList.map((teacher) => {
            if (teacher.teacherName === teacherName) {
                const index = teacher.student.findIndex((el) => el.id === id);
                teacher.student.splice(index, 1);
            }
        });
        this.setStudentToLocalStorage(this.teacherList);
    }
    addNewStudent(teacherName, student) {
        this.teacherList = this.getStudentsFromLocalSrotage();
        this.teacherList.map((teacher) => {
            if (teacher.teacherName === teacherName) {
                teacher.student.push(student);
            }
        });
        this.setStudentToLocalStorage(this.teacherList);
    }
    saveEditTeacher(newTeacher) {
        this.teacherList = this.getStudentsFromLocalSrotage();
        this.teacherList.map((teacher) => {
            if (teacher.student[0].fullName === newTeacher.student[0].fullName) {
                teacher.teacherName = newTeacher.teacherName;
            }
        });
        this.setStudentToLocalStorage(this.teacherList);
    }
    saveEditStudent(editStudent) {
        this.teacherList = this.getStudentsFromLocalSrotage();
        this.teacherList.map((teacher) => {
            teacher.student.forEach((student) => {
                if (editStudent.id === student.id) {
                    student.fullName = editStudent.fullName;
                    student.classNumber = editStudent.classNumber;
                    student.studentType = editStudent.studentType;
                    student.startDate = editStudent.startDate;
                }
            });
        });
        this.setStudentToLocalStorage(this.teacherList);
    }
    deleteTeacher(teacherDel) {
        this.teacherList = this.getStudentsFromLocalSrotage();
        const index = this.teacherList.findIndex((el) => el.teacherName === teacherDel.teacherName);
        this.teacherList.splice(index, 1);
        this.setStudentToLocalStorage(this.teacherList);
    }
    getStudentsByTeacherName(name) {
        let students;
        this.teacherList = this.getStudentsFromLocalSrotage();
        this.teacherList.forEach((teacher) => {
            if (teacher.teacherName === name) {
                students = (teacher.student);
            }
        });
        return students;
    }
};
StudentService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], StudentService);



/***/ }),

/***/ "./src/app/student/student-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-routing.module.ts ***!
  \***************************************************/
/*! exports provided: StudentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function() { return StudentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_create_student_create_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-student/create-student.component */ "./src/app/student/components/create-student/create-student.component.ts");
/* harmony import */ var _components_student_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/student/student.component */ "./src/app/student/components/student/student.component.ts");
/* harmony import */ var _components_show_students_show_students_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/show-students/show-students.component */ "./src/app/student/components/show-students/show-students.component.ts");






const routes = [
    {
        path: '',
        component: _components_student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'create',
        component: _components_create_student_create_student_component__WEBPACK_IMPORTED_MODULE_3__["CreateStudentComponent"],
        pathMatch: 'full'
    },
    {
        path: 'create?**',
        redirectTo: 'create'
    },
    {
        path: 'showStudents',
        component: _components_show_students_show_students_component__WEBPACK_IMPORTED_MODULE_5__["ShowStudentsComponent"]
    }
];
let StudentRoutingModule = class StudentRoutingModule {
};
StudentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StudentRoutingModule);



/***/ }),

/***/ "./src/app/student/student.module.ts":
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _prime_prime_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prime/prime.module */ "./src/app/prime/prime.module.ts");
/* harmony import */ var _components_create_student_create_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-student/create-student.component */ "./src/app/student/components/create-student/create-student.component.ts");
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-routing.module */ "./src/app/student/student-routing.module.ts");
/* harmony import */ var _components_student_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/student/student.component */ "./src/app/student/components/student/student.component.ts");
/* harmony import */ var _components_show_students_show_students_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/show-students/show-students.component */ "./src/app/student/components/show-students/show-students.component.ts");
/* harmony import */ var _directives_filter_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/filter.directive */ "./src/app/student/directives/filter.directive.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/student/pipes/filter.pipe.ts");
/* harmony import */ var _components_teacher_cell_teacher_cell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/teacher-cell/teacher-cell.component */ "./src/app/student/components/teacher-cell/teacher-cell.component.ts");
/* harmony import */ var _components_student_row_student_row_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/student-row/student-row.component */ "./src/app/student/components/student-row/student-row.component.ts");
/* harmony import */ var _components_progress_table_progress_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/progress-table/progress-table.component */ "./src/app/student/components/progress-table/progress-table.component.ts");















let StudentModule = class StudentModule {
};
StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_create_student_create_student_component__WEBPACK_IMPORTED_MODULE_5__["CreateStudentComponent"], _components_student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"], _components_show_students_show_students_component__WEBPACK_IMPORTED_MODULE_8__["ShowStudentsComponent"], _directives_filter_directive__WEBPACK_IMPORTED_MODULE_9__["FilterDirective"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"], _components_teacher_cell_teacher_cell_component__WEBPACK_IMPORTED_MODULE_11__["TeacherCellComponent"], _components_student_row_student_row_component__WEBPACK_IMPORTED_MODULE_12__["StudentRowComponent"], _components_progress_table_progress_table_component__WEBPACK_IMPORTED_MODULE_13__["ProgressTableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _student_routing_module__WEBPACK_IMPORTED_MODULE_6__["StudentRoutingModule"],
            _prime_prime_module__WEBPACK_IMPORTED_MODULE_4__["PrimeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]
    })
], StudentModule);



/***/ }),

/***/ "./src/environments/environment.ts":
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
const environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nata/Рабочий стол/multyForm/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map