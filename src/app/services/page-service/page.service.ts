import { Injectable } from '@angular/core';

@Injectable()
export class PagerService {
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        // ensure current page isn't out of range
        if (currentPage < 1) { 
            currentPage = 1; 
        } else if (currentPage > totalPages) { 
            currentPage = totalPages; 
        }

        let startPage: number, endPage: number;

        if (totalPages <= 4) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage < 4) {
                startPage = 1;
                endPage = 4;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 3;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        // calculate start and end item indexes
        // let startIndex = (currentPage - 1) * pageSize;
        // let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            // startIndex: startIndex,
            // endIndex: endIndex,
            pages: pages
        };
    }
 
}
