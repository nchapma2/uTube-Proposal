class Video < ApplicationRecord
  include ActionView::Helpers::DateHelper
  include PgSearch

  pg_search_scope :search_by_content, against: [:title, :description, :category], using: [:tsearch, :trigram]

  validates :title, :description, presence: true
  has_attached_file :video,
    styles: { thumb: ['400x400#', :jpeg] }
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/

  has_many :likes

  belongs_to :uploader,
  primary_key: :id,
  foreign_key: :uploader_id,
  class_name: 'User'

  has_many :comments

  has_many :likes, as: :likeable

  def posted_date
    time_ago_in_words(self.created_at)
  end

end
