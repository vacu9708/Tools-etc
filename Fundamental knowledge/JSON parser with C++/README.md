### JavaScript Object Notation (JSON) is a standard text-based format for representing structured data.

## Process
1. Reading a txt file and put the text to document buffer.
2. Finding string tokens in the document buffer and save them in token array.
3. Printing the elements of the token array.
4. Deallocation

~~~c++
#define _CRT_SECURE_NO_WARNINGS // To prevent fopen security error
#include <iostream>
using namespace std;

#define MAX_N_OF_TOKENS 20
class JSON {
public:
    int token_i = 0;
    char* tokens[MAX_N_OF_TOKENS];
};

char* read_file(const char* filename, int* document_size) // File to string buffer
{
    FILE* fp = fopen(filename, "rb");
    if (fp == NULL)
        return NULL;

    fseek(fp, 0, SEEK_END); // To the end_of_string of file
    *document_size = ftell(fp); // File document_size
    fseek(fp, 0, SEEK_SET); // To the beginning of file
    char* buffer = new char[*document_size + 1];
    //memset(buffer, 0, document_size + 1);

    if (fread(buffer, *document_size, 1, fp) == 0) { // Put the content of file to buffer.
        cout << "Error in file reading";
        *document_size = 0;
        delete buffer;
        fclose(fp);
        return NULL;
    }

    fclose(fp); // The content of file has been sent to buffer, so the file is no longer necessary.
    return buffer;
}

void parseJSON(char* document, int document_size, JSON* json) {
    if (document[0] != '{') // JSON must start with {
        return;

    for (int i = 1; i < document_size; i++) { // Repeat up to the last character.
        if (document[i] == '"') { // If a beginning " has been found
            int beginning_of_string = i + 1; // +1 to exclude the " at the front
            int closing_of_string = 0;
            for (i = beginning_of_string; i < document_size; i++)
                if (document[i] == '"') {
                    closing_of_string = i;
                    break;
                }
            if (closing_of_string == 0) // Error if the string doesn't have a ending "
                return;

            // Put the found string to token array.
            int string_length = closing_of_string - beginning_of_string;
            json->tokens[json->token_i] = new char[string_length + 1]{ 0 };
            memcpy(json->tokens[json->token_i], document + beginning_of_string, string_length);
            json->token_i++;
        }
    }
}

void freeJSON(JSON* json) { // Deallocation
    for (int i = 0; i < json->token_i; i++)
        delete json->tokens[i];
}

int main() {
    int document_size;
    char* document = read_file("example.json", &document_size);
    if (document == NULL)
        return -1;

    JSON json;
    parseJSON(document, document_size, &json);
    for (int i = 0; i < json.token_i; i += 2) // Print key-value pair.
        printf("%s: %s\n", json.tokens[i], json.tokens[i + 1]);

    // Deallocation
    freeJSON(&json);
    delete document;
}
~~~

### Input
![image](https://user-images.githubusercontent.com/67142421/173249992-eb96bc4e-562e-4810-9d94-0b96ff2980cc.png)

### Output
![image](https://user-images.githubusercontent.com/67142421/173250007-d61d0abd-ad2d-473e-8db9-ca41bc44a907.png)
