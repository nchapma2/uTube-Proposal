class Comment < ApplicationRecord

  validates :body, :author_id, :video, presence: true

  after_initialize :ensure_post_id!

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'

  belongs_to :video

  has_many :child_comments,
  class_name: 'Comment',
  foreign_key: :parent_comment_id,
  primary_key: :id

  belongs_to :parent_comment,
  class_name: 'Comment',
  foreign_key: :parent_comment_id,
  primary_key: :id,
  optional: true

  private

  def ensure_post_id!
    self.post_id ||= self.parent_comment.post_id if parent_comment
  end

end
