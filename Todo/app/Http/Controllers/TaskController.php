<?php

namespace App\Http\Controllers;



use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;


class TaskController extends BaseController
{
	//use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;

	public function index() {
		
		//return "zdfzdfsdfsdf";
		$a = "hahahahaha";
		return view('tasks', ['a'=>$a]);
	}
	
	
	
	
	
	}
