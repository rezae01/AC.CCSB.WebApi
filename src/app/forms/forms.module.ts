import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EJAngular2Module } from 'ej-angular2';
import {
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdRadioModule,
  MdButtonModule,
  MdProgressBarModule,
  MdToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { TreeModule } from 'angular-tree-component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagerService } from './listrequst/services/index';
import { FormRoutes } from './forms.routing';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormTreeComponent } from './form-tree/form-tree.component';
import { EditorComponent } from './editor/editor.component';
import { ListrequstComponent } from './listrequst/listrequst.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormRoutes),
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdRadioModule,
    MdButtonModule,
    MdProgressBarModule,
    MdToolbarModule,
    FlexLayoutModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    TreeModule,
    EJAngular2Module.forRoot()
  ],
  declarations: [
    FormUploadComponent,
    FormValidationComponent,
    FormTreeComponent,
    EditorComponent,
    ListrequstComponent
  ],
  providers: [PagerService]
})

export class FormModule {}
