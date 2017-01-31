class Hotel < ApplicationRecord
	validates :name, presence: true, length: {maximum: 100}
	validates :city, presence: true, length: {maximum: 50}

end
