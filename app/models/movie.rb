class Movie < ApplicationRecord
  has_many  :cinemas,dependent: :destroy
  validates :price, presence: true, :numericality => {:greater_than => 0}


end
