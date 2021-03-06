import { Subject } from 'rxjs';
export declare class NguCarouselService {
    getData: Subject<any>;
    constructor();
    reset(token: any): void;
    moveToSlide(token: any, index: number, animate?: boolean): void;
    private destroy(token);
}
