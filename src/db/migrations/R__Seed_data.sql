CREATE TEMP TABLE temp_users
ON COMMIT DROP
AS
SELECT *
FROM users
WITH NO DATA;

COPY temp_users (id, username, display_name, bio)
FROM '${projectRoot}/src/db/migrations/_seed.csv'
WITH (FORMAT csv);

INSERT INTO users (id, username, display_name, bio)
SELECT id, username, display_name, bio
FROM temp_users
ON CONFLICT DO NOTHING;
