class Review < ApplicationRecord
  belongs_to :user
  belongs_to :hotel
  default_scope -> {order(created_at: :desc)}
  validates :user_id, presence: true
  validates :hotel_id, presence: true
  validates :content, presence: true, length: {maximum: 140}

 # before_save :set_sentiment

# def set_sentiment
 # 	self.sentiment = $analyzer.sentiment(:content) 
  #	self.score = $analyzer.score(:content) 
  #end

  #  def set_sentiment
    	#self.sentiment = $analyzer.sentiment(content)
   # 	self.score = $analyzer.score(content)
     #end

end
