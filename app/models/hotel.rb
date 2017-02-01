class Hotel < ApplicationRecord
	has_many :reviews, dependent: :destroy
	validates :name, presence: true, length: {maximum: 100}
	validates :city, presence: true, length: {maximum: 50}

end
