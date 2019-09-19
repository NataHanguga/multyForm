import { SettingBaseService } from './../../services/setting-base.service';
import { Component } from '@angular/core';
import { Category } from '../../models/category.model';
import { SettingComponent } from '../setting/setting.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent extends SettingComponent<Category>  {
    constructor(service: SettingBaseService<Category>) {
        super(service);
        super.path = 'category';
    }
}
