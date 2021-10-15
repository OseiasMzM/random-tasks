import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface template {
  activity: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  callapi (){
    return this.http.get<template>("https://www.boredapi.com/api/activity");
  }
}
