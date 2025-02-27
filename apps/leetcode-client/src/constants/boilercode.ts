// Boilerplate code for various programming languages
export const cppBoiler = `#include<bits/stdc++.h>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}
`;

export const pyBoiler = `print("Hello World!")`;

export const jsBoiler = `console.log("Hello World");`;

export const assemblyBoiler = `section .data
    msg db "Hello, World!", 0xa
    len equ $ - msg

section .text
    global _start

_start:
    ; Write "Hello, World!" to stdout
    mov eax, 4        ; sys_write
    mov ebx, 1        ; file descriptor (stdout)
    mov ecx, msg      ; message to write
    mov edx, len      ; message length
    int 0x80          ; interrupt

    ; Exit program
    mov eax, 1        ; sys_exit
    xor ebx, ebx      ; exit code 0
    int 0x80
`;

export const bashBoiler = `#!/bin/bash
echo "Hello, World!"
`;

export const basicBoiler = `PRINT "Hello, World!"`;

export const cBoiler = `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
`;

export const clojureBoiler = `(println "Hello, World!")`;

export const cSharpBoiler = `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
`;

export const cobolBoiler = `IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO.
PROCEDURE DIVISION.
    DISPLAY "Hello, World!".
    STOP RUN.
`;

export const commonLispBoiler = `(format t "Hello, World!~%")`;

export const dBoiler = `import std.stdio;

void main() {
    writeln("Hello, World!");
}
`;

export const elixirBoiler = `IO.puts "Hello, World!"`;

export const erLangBoiler = `-module(hello).
-export([hello_world/0]).

hello_world() -> io:fwrite("Hello, World!\\n").
`;

export const fSharpBoiler = `printfn "Hello, World!"`;

export const fortranBoiler = `program hello
    print *, "Hello, World!"
end program hello
`;

export const goBoiler = `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
`;

export const groovyBoiler = `println "Hello, World!"`;

export const haskellBoiler = `main = putStrLn "Hello, World!"`;

export const javaBoiler = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`;

export const kotlinBoiler = `fun main() {
    println("Hello, World!")
}
`;

export const luaBoiler = `print("Hello, World!")`;

export const objectCBoiler = `#import <Foundation/Foundation.h>

int main() {
    @autoreleasepool {
        NSLog(@"Hello, World!");
    }
    return 0;
}
`;

export const oCamlBoiler = `print_endline "Hello, World!"`;

export const octaveBoiler = `printf("Hello, World!\\n");`;

export const pascalBoiler = `program HelloWorld;
begin
    writeln('Hello, World!');
end.
`;

export const perlBoiler = `print "Hello, World!\\n";`;

export const phpBoiler = `<?php
echo "Hello, World!";
?>
`;

export const py2Boiler = `print "Hello, World!"`;

export const py3Boiler = `print("Hello, World!")`;

export const rBoiler = `cat("Hello, World!\\n")`;

export const rubyBoiler = `puts "Hello, World!"`;

export const rustBoiler = `fn main() {
    println!("Hello, World!");
}
`;

export const scalaBoiler = `object HelloWorld {
    def main(args: Array[String]): Unit = {
        println("Hello, World!")
    }
}
`;

export const swiftBoiler = `print("Hello, World!")`;

export const typescriptBoiler = `console.log("Hello, World!");`;

export const visualBasicBoiler = `Module HelloWorld
    Sub Main()
        Console.WriteLine("Hello, World!")
    End Sub
End Module
`;

export const sqlBoiler = `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
`;

// Map language IDs to their respective boilerplate code
const boilerplateMap = new Map<number, string>([
    [45, assemblyBoiler],
    [46, bashBoiler],
    [47, basicBoiler],
    [50, cBoiler],
    [51, cSharpBoiler],
    [54, cppBoiler],
    [55, commonLispBoiler],
    [56, dBoiler],
    [57, elixirBoiler],
    [58, erLangBoiler],
    [59, fortranBoiler],
    [60, goBoiler],
    [61, haskellBoiler],
    [62, javaBoiler],
    [63, jsBoiler],
    [64, luaBoiler],
    [65, oCamlBoiler],
    [66, octaveBoiler],
    [67, pascalBoiler],
    [68, phpBoiler],
    [70, py2Boiler],
    [71, py3Boiler],
    [72, rubyBoiler],
    [73, rustBoiler],
    [74, typescriptBoiler],
    [77, cobolBoiler],
    [78, kotlinBoiler],
    [79, objectCBoiler],
    [80, rBoiler],
    [81, scalaBoiler],
    [82, sqlBoiler],
    [83, swiftBoiler],
    [84, visualBasicBoiler],
    [85, perlBoiler],
    [86, clojureBoiler],
]);


// Function to get boilerplate code by language ID
export const getBoilerCode = (languageId: number): string => {
    return boilerplateMap.get(languageId) || '';
};