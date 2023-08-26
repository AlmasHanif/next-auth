import {RateLimiter} from 'Limiter';

export const Limiter = new RateLimiter({
    tokensPerInterval: 3 ,
    interval:'min',
    fireImmediately:true
})