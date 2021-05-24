CREATE TABLE public."user"
(
    uid SERIAL PRIMARY KEY ,
    uname character varying NOT NULL,
    ubio character varying,
    uemail character varying NOT NULL,
    upass character varying NOT NULL,
    uhobbies character varying,
    ufixed character varying,
    
);
