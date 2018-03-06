import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { WishlistService } from '../services/wishlist.service';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../core/auth.service';
import { CoreModule } from '../../core/core.module';

describe('MovieComponent', () => {

    let fixture: ComponentFixture<MovieComponent>;
    let component: MovieComponent;

    const wishlistServiceStub: Partial<WishlistService> = {

    };

    const authServiceStub: Partial<AuthService> = {

    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ MovieComponent ],
            imports: [
                CoreModule
            ],
            providers: [
                {
                    provide: WishlistService,
                    useValue: wishlistServiceStub
                },
                {
                    provide: AuthService,
                    useValue: authServiceStub
                }
            ]
        });
        fixture = TestBed.createComponent(MovieComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        // TestBed.configureTestingModule({
        //     declarations: [ MovieComponent ],
        //     imports: [
        //         CoreModule
        //     ],
        //     providers: [
        //         {
        //             provide: WishlistService,
        //             useValue: wishlistServiceStub
        //         },
        //         {
        //             provide: AuthService,
        //             useValue: authServiceStub
        //         }
        //     ]
        // });
        // fixture = TestBed.createComponent(MovieComponent);
        // component = fixture.componentInstance;
        expect(component).toBeDefined();
    });
});
