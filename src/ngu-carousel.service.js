import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var NguCarouselService = /** @class */ (function () {
    function NguCarouselService() {
        this.getData = new Subject();
    }
    NguCarouselService.prototype.reset = function (token) {
        this.getData.next({ id: token, ref: 'reset' });
    };
    NguCarouselService.prototype.moveToSlide = function (token, index, animate) {
        this.getData.next({
            id: token,
            ref: 'moveToSlide',
            index: index,
            animation: animate
        });
    };
    NguCarouselService.prototype.destroy = function (token) {
        this.getData.next({ id: token, ref: 'destroy' });
    };
    NguCarouselService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NguCarouselService.ctorParameters = function () { return []; };
    return NguCarouselService;
}());
export { NguCarouselService };
//# sourceMappingURL=ngu-carousel.service.js.map
