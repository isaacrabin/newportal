import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscriber } from './subscriber.model';

@Injectable({
    providedIn: 'root'
})
export class SubscriberService
{
    private _subscriber: ReplaySubject<Subscriber> = new ReplaySubject<Subscriber>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set subscriber(value: Subscriber)
    {
        // Store the value
        this._subscriber.next(value);
    }

    get subscriber$(): Observable<Subscriber>
    {
        return this._subscriber.asObservable();
    }
}
