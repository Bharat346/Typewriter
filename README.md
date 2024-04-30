# Typewriter.js

TypeWriter.js is a JavaScript library for creating an Beautiful Typing Effect On your Website.
This is made Using javaScript Classes.

## Usage

1. **Include the library:**  
   Add the following script tag to your HTML file to include the Typewriter.js library:
   
   ```html
   <script src="https://cdn.jsdelivr.net/gh/Bharat346/Typewriter/typewriter.js"></script>


2. in second script tag you can craete a new Object of TypeWriter with the input .
example :
   ```js
   let arr = ['C' , "C++" , "JavaScript" ,"Python" ,"Typescript" ,"kotlin" ,"Java"];
   let tw = new TypeWriter("ID",arr);

3. Here is one Extra parameter that is param in which you can update speed , delay and Fontsize.
   example :
   ```js
   let param = { speed: 60, delay: 1500, FONTSIZE: 20 };
   let tw = new TypeWriter("ID",arr,param);

4. Basic Html structure : 
   ```html
   <div id="type">
      <p style="margin-right: 10px">Learn</p>
      <p id="ID"></p>
      <div class="cursor"></div>
    </div>

5. Use the Function : 
   ```js
   tw.printArray(); 


## License

PieChart.js is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



