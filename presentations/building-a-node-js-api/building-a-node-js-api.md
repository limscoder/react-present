# Introduction

* For my presentation today, I'll be reading my powerpoint slides word for word

Unfortunately I do not give the greatest presentations so please bear with me. The goals of this reading group are to give you an idea about what Node.js is and can do for you. It is mostly targeted towards people with development experience.

# Features

* ES2015
* Express REST framework
* Testing with superagent
* MongoDb

# What is Node.js?

* Event-driven I/O server-side javascript environment based on V8

As you can tell from Leonaro DiCaprio's face, node.js can be a little confusing at first. To give a rough comparision one can say that Node.js is like the JRE except that it uses javascript instead of java.

- javascript based runtime environment
- google chrome v8 engine on top of libevent
- event based asynchronous programming

# Node processing model

Coming from a procedural programming background, if you haven't done any desktop / web programming then this event based async programming model is really confusing. 

As a quick recap, as you can see in the diagram, you have a single threaded application which is basically a loop that takes processes events (or functions) and then fires them off into a threadpool where the work is actually done. In the Node.js world this c++ threadpool is provided by libevent and the node runtime provides the event loop. 

Since you don't really know when the work is going to be done, you pass a callback as a parameter which gets invoked when the work is done and your result is ready.

# Hello world

## server.js
      
    console.log('Hello World/n');
    
## Terminal    
 
    $ node server.js
    Hello World
    $

# What does the following snippet of code do?

```
@GET
@Path("/api/music/charts")
@Produces(JSON_UTF8)
public List<Song> getTopSongs(@RequestParam("userId") String userId, @RequestParam("limit") Integer limitParam) {
    List<Song> songs = mpd.getAllSongs();
    int limit = limitParam == null ? songs.size() : limitParam;
    
    User user = db.getUser(userId);
    if (user != null) {
        Collections.sort(songs, user.getSortComparator);
    }
    
    if (songs.size() < limit) {
        return songs;    
    }
    
    return songs.subList(0, limit);
}
```

- Gets all the songs and returns the first `x` number of songs based on user preferences

# GET /api/music/charts?userId=xyz&limit=25

```
api.get('/api/music/charts', async(req, res) => {

  const limit = parseInt(req.query.limit);
  const userId = req.query.userId;

  const songs = await mpd.getAllSongs();
      
  if (userId) { 
    const user= await User.findById(userId);
  
    if (user) {
      songs.sort(user.getSortType());
    }
  }
        
  res.send(songs.slice(0, limit)); 
});
```

- Non-blocking I/O
- Heavy computations blocking the event loop

# Promise segway

# Non-blocking IO

# Javascript - the good parts

# Express

```
const api = express();

api.get ...
api.put ...

api.listen(port);
```

# Testing

```
describe(routeMusicDb, function () {

  it('should get top charts', function () {

    // when
    return request(app_url)
      .get(routeMusicDb + '/charts?limit=2')
      .expect(200)
      .then(function (res) {
        
        // then
        var songs = res.body;
        expect(songs.length).to.equal(2);

        var song = songs[0];
        expect(song.playCount).to.equal(0);
      });
  });

});
```

# SQL vs NoSQL

MongoDb is a NoSQL database that allows you to store json objects

# MongoDb user collection

```
[{
  "_id": ObjectId("5899ef79eb721b0399efd350"),
  "username": ...,
  "password": ...,
  "communication": [
    {
      "type": "phone",
      "details": {
        "info": "+41 79 123 1234",
        "order": 2
      }
    },
    {
      "type": "email",
      "details": {
        "info": "snoop@dawg.com",
        "order": 1
      }
    }
  ]
}]
```

# MongoDb basics

# Mongoose schemas

```
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, validate: usernameValidator },
  password: { type: String, required: true },
  sortType: { type: Boolean },
  communication: [CommunicationSchema]
});
```

# Nested schemas

```
const CommunicationSchema = new mongoose.Schema({
  type: { type: String, enum: ['phone', 'email', 'twitter', 'facebook'], required: true },
  details: {
    info: mongoose.Schema.Types.Mixed, 
    order: { type: Number, required: true }
  }
});
```

# Mongoose validation

```
username: { type: String, unique: true, required: true, validate: usernameValidator }
```

```
const usernameValidator = {
  validator: function(input) {
    return validator.isEmail(input) && validator.isLowercase(input);
  },
  msg: '{VALUE} is not a valid email address or is not all lowercase'
}
```

# Mongoose schema methods

```
UserSchema.methods.getSortType = function() {
  return this.sortType ? 'ASC' : 'DESC';
}
```

# Mongoose schema plugins

```
UserSchema.plugin(hashFieldPlugin, { field: 'password' });
```

# Mongoose hashField plugin

```
const mongooseHashField = function(schema, options) {

  const field = options && options.field;

  ...

  const hash = function(value) {
    return bcrypt.genSaltAsync(saltLength)
      .then(salt => {
        return bcrypt.hashAsync(value, salt, null);
      });
  };

  schema.methods[verificationFunctionName] = function(value) {
    return bcrypt.compareAsync(value, this[field]);
  };

}
```

# Mongoose hashField plugin

const mongooseHashField = function(schema, options) {
  ...


  schema.pre('save', function(next) {
    let obj = this;

    // Break out if no change
    if (!obj.isModified(field)) return next();

    hash(obj[field])
      .then(hash => {
        obj[field] = hash;
        next();
      })
      .catch(next);
  });
}

# Mongoose testing

```
describe('hash field plugin', () => {
  it('should match identical user passwords', async() => {
    // given
    const sut = new User(testData.getRandomUser());
    const password = sut.password;

    // when
    await sut.save();
    
    // then
    const savedUser = await User.findOne({ username: sut.username }));
    const isMatch = await savedUser.verifyPassword(password);
    expect(isMatch).to.be.true);
  });
});
```

# Mongoose test setup 1

```
before(() => {
  return testUtil.modelTestSetup()
    .then(result => {
      initConfig = result.initConfig;
      User = result.models.User;
    });
});
```

```
const modelTestSetup = async function() {
  const ic = await initTestConfig();

  await dropCollection(ic.mongoose, 'users');
  ...

  const models = new Models(ic);

  return {
    initConfig: ic,
    models: models
  };

});
```

# Write tests, not many, mostly integration

# Test setup 2

```
const routeTestSetup = async function() {
  const result = await modelTestSetup();
  const initConfig = result.initConfig;
  const models = result.models;

  const api = new Api(initConfig, models);
  result.server = api.listen(4201);
  result.request = supertest('http://localhost:4201');

  return result;
}
```

# Test setup 4

```
const initTestConfig = async function() {
  try {
    const services = {
      ...
    };

    services.tagService = await TagService.fromFile();
    ...

    const initConfig = await configuration.init(env, packageJson.configuration[env], services);
    await initConfig.initPostgres(testPostgresDb);
    await initConfig.initMongo({ mongoDbName: testDb, autoIndex: false });

    return initConfig;
  } catch (err => {
    logger.error('Could not initialize test config,', err);
    process.exit();
  });
}
```

# Test teardown

```
after(() => {
  return testUtil.routeTestTeardown(server);
});
```

```
const routeTestTeardown = function(server) {
  return modelTestTeardown()
    .then(() => server.close());
}
```

```
const modelTestTeardown = function() {
  const mongoose = configuration.mongoose;
  mongoose.models = {};
  mongoose.modelSchemas = {};
  return mongoose.connection.close();
}
```

# Testing revisited

```
describe(routeMusicDb, function () {
  
  it('should get top charts', async() => {
    // given
    const uri = routeMusicDb + '/charts?limit=2';
    
    // when
    const res = await request(app_url).get(uri);
    
    // then
    expect(res.status).to.equal(200);
      
    const songs = res.body;
    expect(songs.length).to.equal(2);

    const song = songs[0];
    expect(song.playCount).to.equal(0);
  });
});
```

# GET /api/music/charts?userId=xyz&limit=25

```
api.get('/api/music/charts', async(req, res) => {

  const limit = parseInt(req.query.limit);
  const userId = req.query.userId;

  const songs = await mpd.getAllSongs();
      
  if (userId) { 
    const user= await User.findById(userId);
  
    if (user) {
      songs.sort(user.getSortType());
    }
  }
        
  res.send(songs.slice(0, limit)); 
});
```

# Error handling

```
api.get('/api/music/charts', async(req, res) => {
  try {
    ...
    const user= await User.findById(userId);
    ...

  } catch (err) {
    logger.error(err);
    res.sendStatus(500); 
  }
});
```

# Express middleware

```
const api = express();

const handleErrors = (err, req, res, next) => {
  logger.error(err);
  ...
  res.sendStatus(code);
  next();
};

api.use(handleErrors);
```

# Javascript Guy

- Typescript
- Flowscript

# Code coverage

- file:///home/victor/dev/novartis-pond/Engine42/coverage/lcov-report/index.html

# Thank you
