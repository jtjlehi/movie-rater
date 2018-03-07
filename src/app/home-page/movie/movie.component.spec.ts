import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { WishlistService } from '../services/wishlist.service';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../core/auth.service';
import { CoreModule } from '../../core/core.module';
import { MovieObj } from '../movieObj.interface';

describe('MovieComponent', () => {

    let fixture: ComponentFixture<MovieComponent>;
    let component: MovieComponent;

    const movieObj: MovieObj = {
        title: 'gone with the wind',
        description: 'an old movie that grossed more with inflation then any other movie',
        image: {
            url: 'someclassyurl.com',
            poster_ref: 'adlsfja',
            description: 'a picture of gone with the wind'
        },
        public_rating: 5,
        app_rating: 5,
        fireId: 'aoievn984adlkjf943'
    };

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
        expect(component).toBeDefined();
    });
});
