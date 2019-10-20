<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    return view('welcome');
});


/*Route::get('/post/{id}/{name}', function($id, $name){

    return "This is post number".$id.$name;
});

Route::get('admin/posts/example', array('as'=>'admin.home', function(){

    $url = route('admin.home');

    return "this url is".$url;
}));*/

//Route::get('/post/{id}', 'PostController@index');

//Route::resource('post', 'PostController');

Route::get('/contact', 'PostController@contact');
Route::get('post/{id}', 'PostController@show_post');
Route::get('/test', 'TestController@index');

Route::get('/pizza', 'PizzaController@index');
Route::get('/pizza/{id}', 'PizzaController@show');
Route::post('/pizza', 'PizzaController@store');
Route::put('/pizza/{id}', 'PizzaController@update');
Route::delete('/pizza/{id}', 'PizzaController@destroy');
