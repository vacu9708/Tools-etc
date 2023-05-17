### C++ DLL
~~~c++
// Define export keyword
#ifdef _MSC_VER // visual c++ 
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

extern "C" // extern "C" means to convert C++ to C
{
    EXPORT int add(int a, int b){
        return a + b;
    }
}
~~~
#### Compile to DLL
~~~
x86_64-w64-mingw32-gcc -shared <source_file> -o <out_file>.dll
~~~

### Python
~~~python
import ctypes # C language types
import platform

# Load C module
path = './c_python.dll'
if 'Windows' == platform.system() :
    c_module = ctypes.windll.LoadLibrary(path)
elif 'Linux' == platform.system() :
    c_module = ctypes.cdll.LoadLibrary(path)
else :
    raise OSError()

add = c_module.add # Load function
add.argtypes = (ctypes.c_int, ctypes.c_int) # Set argument type
add.restype = ctypes.c_int # Set return type

print(add(1,2))
~~~
