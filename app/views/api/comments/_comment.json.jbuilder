
json.extract! comment, :id, :body, :author_id, :created_at, :video_id
json.posted comment.posted_date
json.author_avatar asset_path(comment.author.avatar.url)
json.author comment.author.username
