drop table if exists users;
drop table if exists posts;

create table users
(
    user_id serial primary key 
    ,
    username varchar(20)
    ,
    password varchar(20)
    ,
    profile_pic text
);


create table posts
(
    post_id serial primary key 
    ,
    title varchar(45)
    ,
    img text
    ,
    content text
    ,
    author_id integer references users(user_id)
);

insert into users
    (username, password, profile_pic)
values('Daniel', 'ImIn', 'https://secure.i.telegraph.co.uk/multimedia/archive/03439/dude6_3439641b.jpg'),
    ('Dude', 'ComeOnMan', 'http://sylviesimmons.com/sylvie/wp-content/uploads/2014/03/dude.jpg');

insert into posts
    (title, img, content)
values('First Post', 'http://images.entertainment.ie/images_content/rectangle/620x372/CBB-2078.jpg', 'I have something to say, but maybe later'),
    ('Second Post', 'https://c1.staticflickr.com/9/8452/7936998300_6ab78565ff_b.jpg', 'Dont listen to the first post');