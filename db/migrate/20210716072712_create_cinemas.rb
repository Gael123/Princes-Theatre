class CreateCinemas < ActiveRecord::Migration[6.0]
  def change
    create_table :cinemas do |t|
      t.string :name

      t.timestamps
    end
  end
end
