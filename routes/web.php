<?php

Route::get('/home', 'PizzaController@index');
Route::resource('order', 'OrderController');
Route::get('/orders', 'OrderController@index');
//Route::get('/orders/{email}', 'OrderController@show');

/*Route::get('/pizza/{id}', 'PizzaController@show');
Route::post('/order', 'PizzaController@store');
Route::put('/pizza/{id}', 'PizzaController@update');
Route::delete('/pizza/{id}', 'PizzaController@destroy');*/


Route::view('/{path?}', 'app');
