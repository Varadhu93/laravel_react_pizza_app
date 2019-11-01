## Overview

To create a Pizza application which allows Users to order pizza from list of given pizzas. The App has been designed and created using Laravel + React.

## Softwares Required

* [PhpStorm](https://www.jetbrains.com/phpstorm/download/)
- [XAMPP](https://www.apachefriends.org/download.html)


## Creating a Laravel project

`composer create-project  --prefer-dist  laravel/laravel pizza-app`

## Installing dependencies

`npm install`

## Creating controllers and Routes

` php artisan make:controller <controllername> --resource`

## Database commands

* `php artisan make:migration create_table_name --table=<tablename>`
* `php artisan migrate` - To run outstanding migrations
* `php artisan migrate:rollback` - To rollback a migration
* `php artisan migrate:refresh` - To rollback all migrations and execute all migrations

## Tables

* `Pizza` - id, pizza_name, image, price, timestamp
* `Orders` -order_id, name, contact, address, amount, timestamp

## Sample Test data

```
INSERT INTO `pizza` (`id`, `pizza_name`, `image`, `price`, `created_at`, `updated_at`) VALUES (NULL, 'Neapolitan Pizza', 'https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-margherita-.jpg', '$5.99', NULL, NULL), (NULL, 'Chicago Pizza', 'https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-deepdish.jpg', '$6.99', NULL, NULL), (NULL, 'Sicilian Pizza', 'https://cdnimg.webstaurantstore.com/uploads/blog/2016/8/rectangle.jpg', '$7.99', NULL, NULL), (NULL, 'Greek Pizza', 'https://cdnimg.webstaurantstore.com/uploads/blog/2016/8/onions.jpg', '$8.99', NULL, NULL), (NULL, 'New York-Style Pizza', 'https://cdnimg.webstaurantstore.com/uploads/blog/2016/8/flat.jpg', '$6.99', NULL, NULL), (NULL, 'California Pizza', 'https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-gourmet.jpg', '$7.99', NULL, NULL), (NULL, 'St. Louis Pizza', 'https://cdnimg.webstaurantstore.com/uploads/blog/2019/3/blog-types-pizza_in-blog-8.jpg', '$9.99', NULL, NULL), (NULL, 'Detroit Pizza', 'https://cdnimg.webstaurantstore.com/uploads/blog/2019/3/blog-types-pizza_in-blog-7.jpg', '$4.99', NULL, NULL),(NULL, 'New England Greek Style', 'https://www.tripsavvy.com/thmb/auY2hmSOtkrTpMhvQtn917Hz2mA=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Greek-style-pizza-greggman-56a30fc85f9b58b7d0d0377c.jpg', '$5.99', NULL, NULL),(NULL, 'Tomato Pie: New Jersey style', 'https://www.tripsavvy.com/thmb/r0zX4ULs067vi8_Z22XSdBGwVQU=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TomatoPiePIzza-5c40ec3246e0fb000178f300.jpg', '$8.99', NULL, NULL);
```

## Running the application

1. Go to XAMPP Control and start Apache server and MySQL.
2. From PhpStorm terminal Run `npm start dev`


## Application url and port
`http://pizza_app.test:3000/`







