"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var car_detail_edit_component_1 = require("./car-detail-edit/car-detail-edit.component");
var my_image_add_remove_component_1 = require("./car-detail-edit/my-image-add-remove/my-image-add-remove.component");
var my_list_selector_modal_view_component_1 = require("./car-detail-edit/my-list-selector/my-list-selector-modal-view.component"); // tslint:disable-line:max-line-length
var my_list_selector_component_1 = require("./car-detail-edit/my-list-selector/my-list-selector.component");
var car_detail_component_1 = require("./car-detail/car-detail.component");
var car_list_component_1 = require("./car-list.component");
var cars_routing_module_1 = require("./cars-routing.module");
var car_edit_service_1 = require("./shared/car-edit.service");
var car_service_1 = require("./shared/car.service");
var CarsModule = (function () {
    function CarsModule() {
    }
    CarsModule = __decorate([
        core_1.NgModule({
            imports: [
                cars_routing_module_1.CarsRoutingModule,
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [
                car_list_component_1.CarListComponent,
                car_detail_component_1.CarDetailComponent,
                car_detail_edit_component_1.CarDetailEditComponent,
                my_list_selector_component_1.MyListSelectorComponent,
                my_list_selector_modal_view_component_1.MyListSelectorModalViewComponent,
                my_image_add_remove_component_1.MyImageAddRemoveComponent
            ],
            entryComponents: [
                my_list_selector_modal_view_component_1.MyListSelectorModalViewComponent
            ],
            providers: [
                car_service_1.CarService,
                car_edit_service_1.CarEditService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CarsModule);
    return CarsModule;
}());
exports.CarsModule = CarsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLGdFQUFvRjtBQUVwRix5RkFBcUY7QUFDckYscUhBQWdIO0FBQ2hILGtJQUE0SCxDQUFDLHNDQUFzQztBQUNuSyw0R0FBd0c7QUFDeEcsMEVBQXVFO0FBQ3ZFLDJEQUF3RDtBQUN4RCw2REFBMEQ7QUFDMUQsOERBQTJEO0FBQzNELG9EQUFrRDtBQTRCbEQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQTFCdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHVDQUFpQjtnQkFDakIsaUNBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBQ3ZCLHNDQUE0QjthQUMvQjtZQUNELFlBQVksRUFBRTtnQkFDVixxQ0FBZ0I7Z0JBQ2hCLHlDQUFrQjtnQkFDbEIsa0RBQXNCO2dCQUN0QixvREFBdUI7Z0JBQ3ZCLHdFQUFnQztnQkFDaEMseURBQXlCO2FBQzVCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLHdFQUFnQzthQUNuQztZQUNELFNBQVMsRUFBRTtnQkFDUCx3QkFBVTtnQkFDVixpQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IENhckRldGFpbEVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItZGV0YWlsLWVkaXQvY2FyLWRldGFpbC1lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudCB9IGZyb20gXCIuL2Nhci1kZXRhaWwtZWRpdC9teS1pbWFnZS1hZGQtcmVtb3ZlL215LWltYWdlLWFkZC1yZW1vdmUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNeUxpc3RTZWxlY3Rvck1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2Nhci1kZXRhaWwtZWRpdC9teS1saXN0LXNlbGVjdG9yL215LWxpc3Qtc2VsZWN0b3ItbW9kYWwtdmlldy5jb21wb25lbnRcIjsgLy8gdHNsaW50OmRpc2FibGUtbGluZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IE15TGlzdFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FyLWRldGFpbC1lZGl0L215LWxpc3Qtc2VsZWN0b3IvbXktbGlzdC1zZWxlY3Rvci5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhckRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2Nhci1kZXRhaWwvY2FyLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhckxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcnNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY2Fycy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2FyRWRpdFNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvY2FyLWVkaXQuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9jYXIuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ2Fyc1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDYXJMaXN0Q29tcG9uZW50LFxuICAgICAgICBDYXJEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIENhckRldGFpbEVkaXRDb21wb25lbnQsXG4gICAgICAgIE15TGlzdFNlbGVjdG9yQ29tcG9uZW50LFxuICAgICAgICBNeUxpc3RTZWxlY3Rvck1vZGFsVmlld0NvbXBvbmVudCxcbiAgICAgICAgTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIE15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ2FyU2VydmljZSxcbiAgICAgICAgQ2FyRWRpdFNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyc01vZHVsZSB7IH1cbiJdfQ==