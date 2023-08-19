### 1. Make a file named "credentials"
### 2. Complete the format of the credentials file
~~~
[default]
aws_access_key_id=<value from AWS access portal>
aws_secret_access_key=<value from AWS access portal>
~~~
### 3. Set the location of the credentials file
Java example
~~~java
@Bean
    public AmazonS3 s3Client() {
        return AmazonS3ClientBuilder.standard()
                .withRegion(Regions.AP_NORTHEAST_2)
                .withCredentials(new ProfileCredentialsProvider("credentials", "default"))
                .build();
    }
}
~~~
