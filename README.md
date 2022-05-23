# DENO for Beginners
## Let's learn DENO for better future

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

A modern runtime for JavaScript and TypeScript.

## Features

- Rust (Deno's core was written in Rust, Node's in C++)
- Tokio (the event loop written in Rust)
- TypeScript (Deno supports both JavaScript and TypeScript out of the box)
- V8 (Google's JavaScript runtime used in Chrome and Node, among others)


> Deno’s features are designed to improve upon the capabilities of Node.js. 
> Let’s take a closer look at some of the main features that make Deno a compelling alternative to Node.



## Installation

```
brew install deno
deno --version
```

## REPO content
- Deno REPL 
- Deno run local file (deno run hello.ts)
- TS config passing (deno run --config deno.json hello.ts)
- Deno run external file (deno run https://deno.land/std@0.139.0/examples/welcome.ts)
- Deno external module import (deno run –no-check --reload datetime.ts)
- Permissions in Deno (deno run –allow-net permission.ts)
- Simple server (deno run --allow-net --watch --no-check simpleServer.ts)
- REST API (deno run –no-check –watch rest.ts)
- ENV variable access in deno


