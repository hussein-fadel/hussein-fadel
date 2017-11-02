<!DOCTYPE html>
<html>
    <head>
	<link rel="stylesheet" href="css/normalize.min.css" type="text/css">
    <link rel="stylesheet" href="{!! asset('css/main.css') !!}" type="text/css">
        <title>My Tasks</title>        
    </head>
    <body>
	
	
	<script src="https://unpkg.com/vue@2.5.2/dist/vue.js"></script>
		
		 <div id="container">
    
      <div class="section">
        <h1>ToDo List</h1>

        <div class="content-top">
          <h2>Item</h2>
          <form>
            <input id="task" placeholder = "Subject" required="required">
            <button id="add">Add</button>
            <textarea id="do" placeholder = "Message" required="required"></textarea>
            <span class="separator"></span>
          </form>
        </div>

        <div class="content-buttom">
          <div id="todos"></div>
        </div>

        <div class="content-clear">
          <button id="clear">Clear All</button>
        </div>
      </div>

      
    </div>

    <script src="{!! asset('js/plugins.js') !!}"></script>  
    <script src="{!! asset('js/editFunction.js') !!}"></script>  
    <script src="{!! asset('js/main.js') !!}"></script> 

		
    </body>
</html>
