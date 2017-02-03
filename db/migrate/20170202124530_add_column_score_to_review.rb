class AddColumnScoreToReview < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :score, :decimal
  end
end
