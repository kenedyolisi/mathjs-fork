<a name="Range"></a>
## Range
* [new Range(start, end, [step])](#new_Range_new)
* _instance_
	* [.size()](#Range+size) ⇒ <code>Array.&lt;number&gt;</code>
	* [.min()](#Range+min) ⇒ <code>number</code> &#124; <code>undefined</code>
	* [.max()](#Range+max) ⇒ <code>number</code> &#124; <code>undefined</code>
	* [.forEach(callback)](#Range+forEach)
	* [.map(callback)](#Range+map) ⇒ <code>Array</code>
	* [.toArray()](#Range+toArray) ⇒ <code>Array</code>
	* [.valueOf()](#Range+valueOf) ⇒ <code>Array</code>
	* [.format([options])](#Range+format) ⇒ <code>string</code>
	* [.toString()](#Range+toString) ⇒ <code>string</code>
	* [.toJSON()](#Range+toJSON) ⇒ <code>Object</code>
* _static_
	* [.parse(str)](#Range.parse) ⇒ <code>[Range](#Range)</code> &#124; <code>null</code>
	* [.fromJSON(json)](#Range.fromJSON) ⇒ <code>[Range](#Range)</code>

<a name="new_Range_new"></a>
### new Range(start, end, [step])
Create a range. A range has a start, step, and end, and contains functions


| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | included lower bound |
| end | <code>number</code> | excluded upper bound |
| [step] | <code>number</code> | step size, default value is 1 |

<a name="Range+size"></a>
### range.size() ⇒ <code>Array.&lt;number&gt;</code>
Retrieve the size of the range.

**Kind**: instance method of <code>[Range](#Range)</code>  
**Returns**: <code>Array.&lt;number&gt;</code> - size  
<a name="Range+min"></a>
### range.min() ⇒ <code>number</code> &#124; <code>undefined</code>
Calculate the minimum value in the range

**Kind**: instance method of <code>[Range](#Range)</code>  
**Returns**: <code>number</code> &#124; <code>undefined</code> - min  
<a name="Range+max"></a>
### range.max() ⇒ <code>number</code> &#124; <code>undefined</code>
Calculate the maximum value in the range

**Kind**: instance method of <code>[Range](#Range)</code>  
**Returns**: <code>number</code> &#124; <code>undefined</code> - max  
<a name="Range+forEach"></a>
### range.forEach(callback)
Execute a callback function for each value in the range.

**Kind**: instance method of <code>[Range](#Range)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback method is invoked with three                              parameters: the value of the element, the index                              of the element, and the Range being traversed. |

<a name="Range+map"></a>
### range.map(callback) ⇒ <code>Array</code>
Execute a callback function for each value in the Range, and return the

**Kind**: instance method of <code>[Range](#Range)</code>  
**Returns**: <code>Array</code> - array  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback method is invoked with three                              parameters: the value of the element, the index                              of the element, and the Matrix being traversed. |

<a name="Range+toArray"></a>
### range.toArray() ⇒ <code>Array</code>
Create an Array with a copy of the Ranges data

**Kind**: instance method of <code>[Range](#Range)</code>  
**Returns**: <code>Array</code> - array  
<a name="Range+valueOf"></a>
### range.valueOf() ⇒ <code>Array</code>
Get the primitive value of the Range, a one dimensional array

**Kind**: instance method of <code>[Range](#Range)</code>  
**Returns**: <code>Array</code> - array  
<a name="Range+format"></a>
### range.format([options]) ⇒ <code>string</code>
Get a string representation of the range, with optional formatting options.

**Kind**: instance method of <code>[Range](#Range)</code>  
**Returns**: <code>string</code> - str  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> &#124; <code>number</code> &#124; <code>function</code> | Formatting options. See                                                lib/utils/number:format for a                                                description of the available                                                options. |

<a name="Range+toString"></a>
### range.toString() ⇒ <code>string</code>
Get a string representation of the range.

**Kind**: instance method of <code>[Range](#Range)</code>  
<a name="Range+toJSON"></a>
### range.toJSON() ⇒ <code>Object</code>
Get a JSON representation of the range

**Kind**: instance method of <code>[Range](#Range)</code>  
**Returns**: <code>Object</code> - Returns a JSON object structured as:
<a name="Range.parse"></a>
### Range.parse(str) ⇒ <code>[Range](#Range)</code> &#124; <code>null</code>
Parse a string into a range,

**Kind**: static method of <code>[Range](#Range)</code>  
**Returns**: <code>[Range](#Range)</code> &#124; <code>null</code> - range  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="Range.fromJSON"></a>
### Range.fromJSON(json) ⇒ <code>[Range](#Range)</code>
Instantiate a Range from a JSON object

**Kind**: static method of <code>[Range](#Range)</code>  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>Object</code> | A JSON object structured as:                      `{"mathjs": "Range", "start": 2, "end": 4, "step": 1}` |
