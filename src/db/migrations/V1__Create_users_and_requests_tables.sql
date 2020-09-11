CREATE TABLE users (
	id             UUID        NOT NULL,
	username       TEXT        NOT NULL,
	email          TEXT        NOT NULL,
	display_name   TEXT        NULL,
	bio            TEXT        NULL,
	created_at     TIMESTAMP   NOT NULL    DEFAULT CURRENT_TIMESTAMP,
	updated_at     TIMESTAMP   NOT NULL    DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TYPE request_status AS ENUM ('open', 'resolved');

CREATE TABLE requests (
	id            UUID             NOT NULL,
	name          TEXT             NOT NULL,
	description   TEXT             NULL,
	link          TEXT             NOT NULL,
	status        request_status   NOT NULL,
	created_by    UUID             NOT NULL,
	created_at    TIMESTAMP        NOT NULL    DEFAULT CURRENT_TIMESTAMP,
	updated_at    TIMESTAMP        NOT NULL    DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id),
	FOREIGN KEY (created_by) REFERENCES users(id)
);
