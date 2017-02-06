class Hotel < ApplicationRecord
	has_many :reviews, dependent: :destroy
	validates :name, presence: true, length: {maximum: 100}
	validates :city, presence: true, length: {maximum: 50}
	default_scope -> {order(total_score: :desc)}
	def feed
   		Review.where("hotel_id= ? ", id)
 	end

end
