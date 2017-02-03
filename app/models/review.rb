class Review < ApplicationRecord
  
	$analyze = Sentimental.new
	$analyze.load_defaults

  belongs_to :user
  belongs_to :hotel
  default_scope -> {order(created_at: :desc)}
  validates :user_id, presence: true
  validates :hotel_id, presence: true
  validates :content, presence: true, length: {maximum: 140}

 before_save :set_sentiment, :set_total

def set_sentiment
 #	self.sentiment = $analyzer.sentiment(:content) 
  	self.score = $analyze.score(self.content) 
end


def set_total
	h_id = self.hotel_id
	hotel = Hotel.find(h_id)
	hotel.total_score = hotel.total_score + self.score
	hotel.save
end


  #  def set_sentiment
    	#self.sentiment = $analyzer.sentiment(content)
   # 	self.score = $analyzer.score(content)
     #end

end
