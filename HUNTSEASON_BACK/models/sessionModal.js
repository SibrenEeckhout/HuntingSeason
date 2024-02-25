class Session {
    constructor(sessionId, userId, description, started, ended, title, subtitle, playtime, pingtime) {
      this.sessionId = sessionId;
      this.userId = userId;
      this.description = description;
      this.started = started;
      this.ended = ended;
      this.title = title;
      this.subtitle = subtitle;
      this.playtime = playtime;
      this.pingtime = pingtime;
    }
}

export { Session };
