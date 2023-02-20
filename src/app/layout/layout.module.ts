import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TreoDrawerModule } from '@treo/components/drawer';
import { LayoutComponent } from 'app/layout/layout.component';
import { EmptyLayoutModule } from 'app/layout/layouts/empty/empty.module';
import { FuturisticLayoutModule } from 'app/layout/layouts/vertical/futuristic/futuristic.module';
import { ThinLayoutModule } from 'app/layout/layouts/vertical/thin/thin.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { LandingLayoutModule } from './layouts/vertical/landing/landing.module';
import { BasicLayoutModule } from './layouts/vertical/basic/basic.module';
import { ClassyLayoutModule } from './layouts/vertical/classy/classy.module';
import { CompactLayoutModule } from './layouts/vertical/compact/compact.module';
import { DenseLayoutModule } from './layouts/vertical/dense/dense.module';
import { ClassicLayoutModule } from './layouts/vertical/classic/classic.module';

const layoutModules = [
    // Empty
    EmptyLayoutModule,
    // Vertical navigation
    ClassicLayoutModule,
    BasicLayoutModule,
    ClassyLayoutModule,
    CompactLayoutModule,
    DenseLayoutModule,
    FuturisticLayoutModule,
    ThinLayoutModule,
    LandingLayoutModule,
  ];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatTooltipModule,
        TreoDrawerModule,
        SharedModule,
        ...layoutModules,
    ],
    exports: [
        LayoutComponent,
        ...layoutModules,
     
    ]
})
export class LayoutModule {
}
