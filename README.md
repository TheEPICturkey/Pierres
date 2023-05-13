# VenderOrder.Solution

#### By Brandon Spear

## Technologies Used

- C#
- .NET 6
- ASP.NET Core MVC
- Javascript
- HTML

## Description

Part 2 of Pierres website.

## Setup/Installation Requirements

### Requires

- [.NET 6]

### Download/Run Instructions (git)

- clone: `$ git clone ` or Code>Download ZIP
- navigate to project folder: `$ cd VendorOrder.Solution/VendorOrder`
- restore: `$ dotnet restore`
- build: `$ dotnet build`
- run: `$ dotnet run`

### Test Instructions (git)

- clone: `$ git clone ` or Code>Download ZIP
- navigate to test folder: `$ cd VendorOrder.Solution/VendorOrder.Tests`
- test: `$ dotnet test`

## Known Bugs

- At VendorOrder/Views/Vendor/Show.cshtml, I added a header button to go back to Index.cshtml, but the origional button at bottom of body will not go away, even know I deleted it. If clicked, it brings you to a "Hello World" file Might be a cache issue on operator side.
- localhost:5000 and localhost:5001 are showing different things. "localhost: 5001" is the intended look, whereas localhost: 5000 does not have proper background color for body.

## License

_If any issues with the website occur, please feel free to email me at brandon.spear@comcast.net_

Copyright (c) <2023> <Copyright Brandon Spear>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.