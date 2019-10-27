<?php

Route::get('/home', 'PizzaController@index');
Route::post('/order', 'OrderController@store');


/*Route::get('/pizza/{id}', 'PizzaController@show');
Route::post('/order', 'PizzaController@store');
Route::put('/pizza/{id}', 'PizzaController@update');
Route::delete('/pizza/{id}', 'PizzaController@destroy');*/


Route::view('/{path?}', 'app');
