App.Router.map(function(){
  this.route("login", {path: "/login"});
  this.route("about", {path: "/about"});
  this.resource("mobileTasks", {path: "/mobile-tasks"});
  this.resource("tasks", function(){
    this.resource("task", {path: "/:uuid"});
  });
  this.resource("completed", function(){
    this.resource("completedTask", {path: "/:uuid"});
  });
  this.route("unconfigurable", {path: "/no-tasks"});
  this.route("api_access", {path: "/api-access"});
  this.route("synchronization", {path: "/synchronization"});
  this.route("configure", {path: "/configure"});
  this.route("getting_started", {path: "/getting-started"});
  this.route("sms", {path: "/sms"});
});

App.Router.reopen({
  location: 'history'
});
