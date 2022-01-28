<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Role\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::group(['middleware' => 'auth:api'], function(){
    Route::get('user', [UserController::class, 'user']);
    Route::put('user/info', [UserController::class, 'updateInfo']);
    Route::put('user/password', [UserController::class, 'updatePassword']);

    Route::apiResource('roles', RoleController::class);
    Route::apiResource('users', UserController::class);
});

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
