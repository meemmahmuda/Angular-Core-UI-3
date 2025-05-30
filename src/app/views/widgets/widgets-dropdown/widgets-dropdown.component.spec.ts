import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModule, DropdownModule, GridModule, WidgetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { WidgetsDropdownComponent } from './widgets-dropdown.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from '@coreui/angular';
import { CardModule } from '@coreui/angular';
import { ChartsComponent } from '../../charts/charts.component';
import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('WidgetsDropdownComponent', () => {
  let component: WidgetsDropdownComponent;
  let fixture: ComponentFixture<WidgetsDropdownComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WidgetModule, DropdownModule, IconModule, ButtonModule, ChartjsModule, GridModule, WidgetsDropdownComponent, RouterTestingModule],
    providers: [IconSetService]
})
    .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(WidgetsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
