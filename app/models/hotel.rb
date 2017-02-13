class Hotel < ApplicationRecord
	#attr_accessible :name, :city
	has_many :reviews, dependent: :destroy
	has_many :amenities, dependent: :destroy 
	validates :name, presence: true, length: { maximum: 100 }
	validates :city, presence: true, length: { maximum: 50 }
	default_scope -> { order(total_score: :desc) }
	def feed
   		Review.where("hotel_id= ? ", id)
 	end

 	def self.search(search)
 		if search
 			where('name LIKE ?',"%#{search}%")  #where('name LIKE ?', "%#{search}%")
 		else
 			Hotel.all #performs empty scope on hotel and lets perform other search queries afterwards
 		end
 	end
end