<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderPizza extends Model
{
    protected  $fillable = ['id', 'price', 'quantity'];
}
